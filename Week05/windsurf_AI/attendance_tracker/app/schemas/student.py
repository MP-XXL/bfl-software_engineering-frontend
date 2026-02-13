from pydantic import BaseModel, EmailStr, field_validator
from typing import Optional
from datetime import datetime


class StudentCreate(BaseModel):
    name: str
    email: EmailStr
    password: str
    
    @field_validator('password')
    @classmethod
    def validate_password(cls, v):
        if len(v.encode('utf-8')) > 72:
            # Truncate to 72 bytes if longer
            return v[:72]
        return v


class StudentLogin(BaseModel):
    email: EmailStr
    password: str
    
    @field_validator('password')
    @classmethod
    def validate_password(cls, v):
        if len(v.encode('utf-8')) > 72:
            # Truncate to 72 bytes if longer
            return v[:72]
        return v


class StudentResponse(BaseModel):
    id: int
    name: str
    email: str
    is_admin: bool
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True
