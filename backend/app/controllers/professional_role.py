from sqlalchemy.orm import Session
from app.models.professional_role import ProfessionalRole
from app.schemas.professional_role import ProfessionalRoleCreate, ProfessionalRoleUpdate

# function for getting all professional roles
def get_professional_roles(db: Session):
    return db.query(ProfessionalRole).all()

# function for creating a new professional role
def create_professional_role(db: Session, professional_role: ProfessionalRoleCreate):
    db_professional_role = ProfessionalRole(
        professional_role_name=professional_role.professional_role_name,
        okved_section_id=professional_role.okved_section_id
    )
    db.add(db_professional_role)
    db.commit()
    db.refresh(db_professional_role)
    return db_professional_role

# function for updating an existing professional role by id
def update_professional_role(db: Session, professional_role_id: int, professional_role: ProfessionalRoleUpdate):
    db_professional_role = db.query(ProfessionalRole).filter(ProfessionalRole.id == professional_role_id).first()
    db_professional_role.professional_role_name = professional_role.professional_role_name
    db_professional_role.okved_section_id = professional_role.okved_section_id
    db.commit()
    db.refresh(db_professional_role)
    return db_professional_role

# function for deleting an existing professional role by id
def delete_professional_role(db: Session, professional_role_id: int):
    professional_role = db.query(ProfessionalRole).filter(ProfessionalRole.id == professional_role_id).first()
    db.delete(professional_role)
    db.commit()
    return professional_role
