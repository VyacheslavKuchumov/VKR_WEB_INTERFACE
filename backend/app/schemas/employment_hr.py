from pydantic import BaseModel, ConfigDict

class EmploymentHrCreate(BaseModel):
    year: int
    number_of_employees: float
    professional_role_id: int
    salary: float
    

class EmploymentHrUpdate(BaseModel):
    year: int
    number_of_employees: float
    professional_role_id: int
    salary: float
    

class EmploymentHrOut(BaseModel):
    id: int
    year: int
    number_of_employees: float
    salary: float
    professional_role_id: int

    model_config = ConfigDict(from_attributes=True)
