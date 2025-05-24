from pydantic import BaseModel, ConfigDict



class EmploymentMinstatCreate(BaseModel):
    year: int
    number_of_employees: float
    okved_section_id: int
    # salary: float

class EmploymentMinstatUpdate(BaseModel):
    year: int
    number_of_employees: float
    okved_section_id: int
    # salary: float
        
class EmploymentMinstatOut(BaseModel):
    id: int
    year: int
    number_of_employees: float
    # salary: float



    model_config = ConfigDict(from_attributes=True)
