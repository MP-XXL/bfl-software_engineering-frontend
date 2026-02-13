from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import timedelta, date
from app.database.connection import get_db
from app.models.student import Student
from app.models.attendance import Attendance
from app.schemas.student import StudentCreate, StudentLogin, StudentResponse
from app.schemas.token import Token
from app.auth.password import get_password_hash, verify_password
from app.auth.jwt_handler import create_access_token
from app.config import settings

router = APIRouter(prefix="/auth", tags=["authentication"])


@router.post("/register", response_model=StudentResponse, status_code=status.HTTP_201_CREATED)
async def register_student(student: StudentCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    db_user = db.query(Student).filter(Student.email == student.email).first()
    if db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )
    
    # Check if this is the first user (make them admin)
    user_count = db.query(Student).count()
    is_admin = user_count == 0
    
    # Create new student
    hashed_password = get_password_hash(student.password)
    db_student = Student(
        name=student.name,
        email=student.email,
        hashed_password=hashed_password,
        is_admin=is_admin
    )
    
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    
    return db_student


@router.post("/login", response_model=Token)
async def login_student(student: StudentLogin, db: Session = Depends(get_db)):
    # Authenticate user
    db_user = db.query(Student).filter(Student.email == student.email).first()
    if not db_user or not verify_password(student.password, db_user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    # Check if attendance record exists for this student
    attendance = db.query(Attendance).filter(Attendance.student_id == db_user.id).first()
    today = date.today()
    
    if attendance:
        # Check if user is a student and already logged in today
        if not db_user.is_admin and attendance.last_login_date == today:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Student has already logged in today. Only one login per day is allowed."
            )
        
        # Update existing attendance record
        attendance.login_count += 1
        attendance.last_login_date = today
        db.commit()
    else:
        # Create new attendance record
        attendance = Attendance(
            student_id=db_user.id,
            login_count=1,
            last_login_date=today
        )
        db.add(attendance)
        db.commit()
    
    # Create access token
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": db_user.email}, expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}
