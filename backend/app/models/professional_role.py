from sqlalchemy import Column, BigInteger, Text, DateTime, Integer, Float, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base
from app.models.employment_hr import EmploymentHr

class ProfessionalRole(Base):
    __tablename__ = "professional_role"

    id = Column(BigInteger, primary_key=True, index=True)
    professional_role_name = Column(Text, nullable=False)
    professional_role_code = Column(Text, nullable=True)
    okved_section_id = Column(BigInteger, ForeignKey("okved_section.id"), nullable=False)
    
    
    # Relationship back to the OkvedSection.
    okved_section = relationship("OkvedSection", back_populates="professional_role")
    
    # One-to-many relationship: one professional role can have many employment records.
    employment_hr = relationship(
        "EmploymentHr",
        back_populates="professional_role",
        # cascade="all, delete-orphan"
    )
