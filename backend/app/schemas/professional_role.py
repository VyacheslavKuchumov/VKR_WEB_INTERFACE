from pydantic import BaseModel, ConfigDict
from app.schemas.employment_hr import EmploymentHrOut
from typing import Optional


class ProfessionalRoleCreate(BaseModel):
    professional_role_name: str
    okved_section_id: int
    

class ProfessionalRoleUpdate(BaseModel):
    professional_role_name: str
    okved_section_id: int
    

class ProfessionalRoleOut(BaseModel):
    id: int
    professional_role_name: str
    okved_section_id: int
    
    employment_hr: Optional[list[EmploymentHrOut]] = None

    model_config = ConfigDict(from_attributes=True)

