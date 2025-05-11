from sqlalchemy.orm import Session
from app.models.okved_section import OkvedSection
from app.schemas.okved_section import OkvedSectionCreate, OkvedSectionUpdate

# function for getting all okved sections
def get_okved_sections(db: Session):
    return db.query(OkvedSection).order_by(OkvedSection.okved_section_code).all()

# funcion for creating a new okved section
def create_okved_section(db: Session, okved_section: OkvedSectionCreate):
    db_okved_section = OkvedSection(
        okved_section_name=okved_section.okved_section_name,
        okved_section_code=okved_section.okved_section_code
    )
    db.add(db_okved_section)
    db.commit()
    db.refresh(db_okved_section)
    return db_okved_section

# function for updating an existing okved section by id
def update_okved_section(db: Session, okved_section_id: int, okved_section: OkvedSectionUpdate):
    db_okved_section = db.query(OkvedSection).filter(OkvedSection.id == okved_section_id).first()
    db_okved_section.okved_section_name = okved_section.okved_section_name
    db_okved_section.okved_section_code = okved_section.okved_section_code
    db.commit()
    db.refresh(db_okved_section)
    return db_okved_section



# function for deleting an existing okved section by id
def delete_okved_section(db: Session, okved_section_id: int):
    okved_section = db.query(OkvedSection).filter(OkvedSection.id == okved_section_id).first()
    db.delete(okved_section)
    db.commit()
    return okved_section
