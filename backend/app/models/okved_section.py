from sqlalchemy import Column, BigInteger, Text, DateTime
from sqlalchemy.orm import relationship
from app.database import Base

class OkvedSection(Base):
    __tablename__ = "okved_section"

    id = Column(BigInteger, primary_key=True, index=True)
    okved_section_code = Column(Text, nullable=False, unique=True)
    okved_section_name = Column(Text, nullable=False)
    img_url = Column(Text, nullable=True)
    
    
    # One-to-many relationship: one OKVED section can have many employment records.
    employment_minstat = relationship(
        "EmploymentMinstat",
        back_populates="okved_section",
        cascade="all, delete-orphan"
    )
    professional_role = relationship(
        "ProfessionalRole",
        back_populates="okved_section",
        cascade="all, delete-orphan"
    )