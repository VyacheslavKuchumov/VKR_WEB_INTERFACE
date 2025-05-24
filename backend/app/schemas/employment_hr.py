from pydantic import BaseModel, ConfigDict

class EmploymentHrCreate(BaseModel):
    date: int
    number_of_vacancies: float
    professional_role_id: int
    # salary: float
    

class EmploymentHrUpdate(BaseModel):
    date: int
    number_of_vacancies: float
    professional_role_id: int
    # salary: float
    

class EmploymentHrOut(BaseModel):
    id: int
    date: int
    number_of_vacancies: float
    # salary: float
    professional_role_id: int

    model_config = ConfigDict(from_attributes=True)
