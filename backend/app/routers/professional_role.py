from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.professional_role import ProfessionalRoleCreate, ProfessionalRoleUpdate, ProfessionalRoleOut
from app.controllers.professional_role import create_professional_role, get_professional_roles, update_professional_role, delete_professional_role
from app.database import get_db

router = APIRouter()

# get all professional roles
@router.get("/", response_model=list[ProfessionalRoleOut])
def get_all_professional_roles(db: Session = Depends(get_db)):
    return get_professional_roles(db)

# create a new professional role
@router.post("/", response_model=ProfessionalRoleOut)
def create_professional_role_route(professional_role: ProfessionalRoleCreate, db: Session = Depends(get_db)):
    return create_professional_role(db, professional_role)

# update an existing professional role by id
@router.put("/{professional_role_id}", response_model=ProfessionalRoleOut)
def update_professional_role_route(professional_role_id: int, professional_role: ProfessionalRoleUpdate, db: Session = Depends(get_db)):
    return update_professional_role(db, professional_role_id, professional_role)

# delete an existing professional role by id
@router.delete("/{professional_role_id}", response_model=ProfessionalRoleOut)
def delete_professional_role_route(professional_role_id: int, db: Session = Depends(get_db)):
    return delete_professional_role(db, professional_role_id)

