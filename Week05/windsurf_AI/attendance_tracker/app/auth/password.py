from passlib.context import CryptContext
import bcrypt

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password: str, hashed_password: str) -> bool:
    # Bcrypt has a 72-byte limit, so we truncate the password if it's too long
    truncated_password = plain_password[:72]
    # Use bcrypt directly to avoid the initialization issue
    return bcrypt.checkpw(truncated_password.encode('utf-8'), hashed_password.encode('utf-8'))


def get_password_hash(password: str) -> str:
    # Bcrypt has a 72-byte limit, so we truncate the password if it's too long
    truncated_password = password[:72]
    # Use bcrypt directly to avoid the initialization issue
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(truncated_password.encode('utf-8'), salt)
    return hashed.decode('utf-8')
