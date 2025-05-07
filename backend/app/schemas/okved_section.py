from pydantic import BaseModel, ConfigDict
from typing import Optional
from app.schemas.professional_role import ProfessionalRoleOut
from app.schemas.employment_minstat import EmploymentMinstatOut


class OkvedSectionCreate(BaseModel):
    okved_section_code: str
    okved_section_name: str
    img_url: Optional[str] = None

class OkvedSectionUpdate(BaseModel):
    okved_section_code: str
    okved_section_name: str
    img_url: Optional[str] = None
    

class OkvedSectionOut(BaseModel):
    id: int
    okved_section_code: str
    okved_section_name: str
    img_url: Optional[str] = None
    
    employment_minstat: Optional[list[EmploymentMinstatOut]] = None
    professional_role: Optional[list[ProfessionalRoleOut]] = None

    model_config = ConfigDict(from_attributes=True)
