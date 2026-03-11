from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import engine
from . import models
from .routers import jobs
from .routers import applications


app = FastAPI(
    title="Unizoy Job Board API",
    description="Backend API for Job Board Application",
    version="1.0.0"
)

# Create database tables
models.Base.metadata.create_all(bind=engine)

# CORS configuration (for React frontend)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(jobs.router, tags=["Jobs"])
app.include_router(applications.router, tags=["Applications"])


@app.get("/")
def root():
    return {"message": "Unizoy Job Board Backend Running"}