from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database.connection import get_db
from app.models.student import Student
from app.models.attendance import Attendance
from app.schemas.student import StudentResponse
from app.schemas.attendance import AttendanceResponse
from app.auth.dependencies import get_current_admin

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/students", response_model=List[StudentResponse])
async def get_all_students(
    current_admin: Student = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    students = db.query(Student).all()
    return students


@router.get("/attendance", response_model=List[AttendanceResponse])
async def get_attendance(
    current_admin: Student = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    attendance_records = db.query(Attendance).order_by(Attendance.login_time.desc()).all()
    return attendance_records


@router.get("/attendance/{student_id}", response_model=List[AttendanceResponse])
async def get_student_attendance(
    student_id: int,
    current_admin: Student = Depends(get_current_admin),
    db: Session = Depends(get_db)
):
    # Check if student exists
    student = db.query(Student).filter(Student.id == student_id).first()
    if not student:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Student not found"
        )
    
    attendance_records = db.query(Attendance).filter(
        Attendance.student_id == student_id
    ).order_by(Attendance.login_time.desc()).all()
    
    return attendance_records
