from fastapi import FastAPI
from app.database import Base, engine
from app.routers import test

# Initialize database tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

# Register routes
app.include_router(test.router, prefix="/tests", tags=["Tests"])
