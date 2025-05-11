from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.employment_hr import EmploymentHrCreate, EmploymentHrUpdate, EmploymentHrOut
from app.controllers.employment_hr import create_employment_hr, get_employment_hr, update_employment_hr, delete_employment_hr
from app.database import get_db

router = APIRouter()

# get all employment hr records
@router.get("/", response_model=list[EmploymentHrOut])
def get_all_employment_hr(db: Session = Depends(get_db)):
    return get_employment_hr(db)

# create a new employment hr record
@router.post("/", response_model=EmploymentHrOut)
def create_employment_hr_route(employment_hr: EmploymentHrCreate, db: Session = Depends(get_db)):
    return create_employment_hr(db, employment_hr)

# update an existing employment hr record by id
@router.put("/{employment_hr_id}", response_model=EmploymentHrOut)
def update_employment_hr_route(employment_hr_id: int, employment_hr: EmploymentHrUpdate, db: Session = Depends(get_db)):
    return update_employment_hr(db, employment_hr_id, employment_hr)

# delete an existing employment hr record by id
@router.delete("/{employment_hr_id}", response_model=EmploymentHrOut)
def delete_employment_hr_route(employment_hr_id: int, db: Session = Depends(get_db)):
    return delete_employment_hr(db, employment_hr_id)


