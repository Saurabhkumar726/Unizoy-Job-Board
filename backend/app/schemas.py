from pydantic import BaseModel
from datetime import datetime


class JobCreate(BaseModel):
    title: str
    description: str
    location: str


class Job(BaseModel):
    id: int
    title: str
    description: str
    location: str
    created_at: datetime

    class Config:
        from_attributes = True


class ApplicationCreate(BaseModel):
    name: str
    email: str
    resume: str
    job_id: int


class Application(BaseModel):
    id: int
    name: str
    email: str
    resume: str
    job_id: int

    class Config:
        from_attributes = True
        