from sqlalchemy.orm import Session
from app.database.base import SessionLocal


def get_db() -> Session:
    """
    Dependency function to get database session
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
