from sqlalchemy import Column, Integer, ForeignKey, DateTime, Date
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database.base import Base


class Attendance(Base):
    __tablename__ = "attendance"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"), nullable=False, unique=True, index=True)
    login_time = Column(DateTime(timezone=True), server_default=func.now())
    login_count = Column(Integer, default=1)
    last_login_date = Column(Date, nullable=True)
    
    # Relationship to Student
    student = relationship("Student", backref="attendance_record", uselist=False)

    def __repr__(self):
        return f"<Attendance(id={self.id}, student_id={self.student_id}, login_time={self.login_time}, login_count={self.login_count}, last_login_date={self.last_login_date})>"
