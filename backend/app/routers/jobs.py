from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas

router = APIRouter()


@router.get("/jobs")
def get_jobs(db: Session = Depends(get_db)):
    jobs = db.query(models.Job).all()
    return jobs


@router.post("/jobs")
def create_job(job: schemas.JobCreate, db: Session = Depends(get_db)):
    new_job = models.Job(**job.dict())
    db.add(new_job)
    db.commit()
    db.refresh(new_job)
    return new_job


@router.put("/jobs/{job_id}")
def update_job(job_id: int, job: schemas.JobCreate, db: Session = Depends(get_db)):
    existing_job = db.query(models.Job).filter(models.Job.id == job_id).first()

    if not existing_job:
        return {"error": "Job not found"}

    existing_job.title = job.title
    existing_job.description = job.description
    existing_job.location = job.location

    db.commit()
    db.refresh(existing_job)

    return existing_job


@router.delete("/jobs/{job_id}")
def delete_job(job_id: int, db: Session = Depends(get_db)):
    job = db.query(models.Job).filter(models.Job.id == job_id).first()

    if not job:
        return {"error": "Job not found"}

    db.delete(job)
    db.commit()

    return {"message": "Job deleted successfully"}