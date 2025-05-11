from sqlalchemy.orm import Session
from app.models.employment_hr import EmploymentHr
from app.schemas.employment_hr import EmploymentHrCreate, EmploymentHrUpdate

# function for getting all employment hr records
def get_employment_hr(db: Session):
    return db.query(EmploymentHr).order_by(EmploymentHr.date).all()

# function for creating a new employment hr record
def create_employment_hr(db: Session, employment_hr: EmploymentHrCreate):
    db_employment_hr = EmploymentHr(
        date=employment_hr.date,
        salary=employment_hr.salary,
        number_of_vacancies=employment_hr.number_of_vacancies,
        professional_role_id=employment_hr.professional_role_id
    )
    db.add(db_employment_hr)
    db.commit()
    db.refresh(db_employment_hr)
    return db_employment_hr

# function for updating an existing employment hr record by id
def update_employment_hr(db: Session, employment_hr_id: int, employment_hr: EmploymentHrUpdate):
    db_employment_hr = db.query(EmploymentHr).filter(EmploymentHr.id == employment_hr_id).first()
    db_employment_hr.date = employment_hr.date
    db_employment_hr.salary = employment_hr.salary
    db_employment_hr.number_of_vacancies = employment_hr.number_of_vacancies
    db_employment_hr.professional_role_id = employment_hr.professional_role_id
    db.commit()
    db.refresh(db_employment_hr)
    return db_employment_hr

# function for deleting an existing employment hr record by id
def delete_employment_hr(db: Session, employment_hr_id: int):
    employment_hr = db.query(EmploymentHr).filter(EmploymentHr.id == employment_hr_id).first()
    db.delete(employment_hr)
    db.commit()
    return employment_hr

