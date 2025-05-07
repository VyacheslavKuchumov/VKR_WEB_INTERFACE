from sqlalchemy import Column, BigInteger, Text, DateTime, Integer, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base

class ProfessionalRole(Base):
    __tablename__ = "professional_role"

    id = Column(BigInteger, primary_key=True, index=True)
    professional_role_name = Column(Text, nullable=False, unique=True)
    # Foreign key that references the OKVED section.
    okved_section_id = Column(BigInteger, ForeignKey("okved_section.id"), nullable=False)
    
    
    # One-to-many relationship: one OKVED section can have many employment records.
    employments = relationship(
        "EmploymentMinstat",
        back_populates="okved_section",
        # cascade="all, delete-orphan"
    )