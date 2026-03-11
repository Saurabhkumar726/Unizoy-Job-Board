from fastapi import APIRouter
from ..database import SessionLocal
from .. import models

router = APIRouter()


# Get all applications
@router.get("/applications")
def get_applications():
    db = SessionLocal()
    return db.query(models.Application).all()


# Apply for a job
@router.post("/apply")
def apply_job(application: dict):
    db = SessionLocal()

    new_application = models.Application(
        name=application["name"],
        email=application["email"],
        resume=application["resume"],
        job_id=application["job_id"]
    )

    db.add(new_application)
    db.commit()
    db.refresh(new_application)

    return new_application


# Delete application
@router.delete("/applications/{id}")
def delete_application(id: int):
    db = SessionLocal()

    application = db.query(models.Application).filter(models.Application.id == id).first()

    if not application:
        return {"error": "Application not found"}

    db.delete(application)
    db.commit()

    return {"message": "Application deleted"}