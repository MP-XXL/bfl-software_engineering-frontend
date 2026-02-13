from pydantic import BaseModel
from datetime import datetime, date
from typing import Optional


class AttendanceResponse(BaseModel):
    id: int
    student_id: int
    login_time: datetime
    login_count: int
    last_login_date: Optional[date] = None

    class Config:
        from_attributes = True
