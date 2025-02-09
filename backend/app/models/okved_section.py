from sqlalchemy import Column, BigInteger, Text, DateTime
from app.database import Base

class OkvedSection(Base):
    __tablename__ = "okved_sections"

    id = Column(BigInteger, primary_key=True, index=True)
    code = Column(Text, nullable=False, unique=True)
    name = Column(Text, nullable=False)