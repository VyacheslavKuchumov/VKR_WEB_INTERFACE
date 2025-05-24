from sqlalchemy import Column, BigInteger, Text, DateTime, Integer, Float, ForeignKey, Date
from sqlalchemy.orm import relationship
from app.database import Base

class EmploymentHr(Base):
    __tablename__ = "employment_hr"

    id = Column(BigInteger, primary_key=True, index=True)
    date = Column(Date, nullable=False)
    # salary = Column(Float, nullable=False)
    number_of_vacancies = Column(Integer, nullable=False)
    
    # Foreign key that references the OKVED section.
    professional_role_id = Column(BigInteger, ForeignKey("professional_role.id"), nullable=False)
    
    # Relationship back to the OkvedSection.
    professional_role = relationship("ProfessionalRole", back_populates="employment_hr")