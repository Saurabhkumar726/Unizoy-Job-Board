
UNIZOY JOB BOARD
================

A full-stack Job Board web application built with React (Frontend) and FastAPI (Backend).
Users can view job listings, apply for jobs, and administrators can post, edit, or delete jobs.
The project also includes a job application dashboard and dark mode support.

------------------------------------------------------------
LIVE DEPLOYMENT
------------------------------------------------------------

Frontend (Netlify):
https://unizoy-job-board.netlify.app/applications

Backend API (Render):
https://unizoy-job-board-jaw9.onrender.com/

API Documentation (FastAPI Swagger):
https://unizoy-job-board-jaw9.onrender.com/docs

------------------------------------------------------------
FEATURES
------------------------------------------------------------

Frontend Features
-----------------
• View all available jobs
• Search jobs by keyword
• Apply for jobs
• Dark mode toggle
• Responsive job cards
• Admin panel to post jobs
• Edit or delete job listings
• Applications dashboard

Backend Features
----------------
• REST API built with FastAPI
• CRUD operations for jobs
• Store job applications
• SQLAlchemy ORM for database management
• SQLite database
• CORS support for frontend integration

------------------------------------------------------------
TECH STACK
------------------------------------------------------------

Frontend
• React.js
• React Router
• Axios
• CSS

Backend
• FastAPI
• Python
• SQLAlchemy
• SQLite

Deployment
• Netlify (Frontend)
• Render (Backend)
• GitHub (Version Control)

------------------------------------------------------------
PROJECT FOLDER STRUCTURE
------------------------------------------------------------

Unizoy-Job-Board
│
├── backend
│   │
│   ├── app
│   │   │
│   │   ├── routers
│   │   │   ├── jobs.py
│   │   │   └── applications.py
│   │   │
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── schemas.py
│   │
│   ├── requirements.txt
│   └── jobs.db
│
└── frontend
    │
    ├── public
    │   ├── index.html
    │   └── favicon.ico
    │
    ├── src
    │   │
    │   ├── components
    │   │   ├── Header.js
    │   │   ├── Footer.js
    │   │   └── JobCard.js
    │   │
    │   ├── pages
    │   │   ├── Home.js
    │   │   ├── Admin.js
    │   │   ├── Apply.js
    │   │   ├── EditJob.js
    │   │   ├── Applications.js
    │   │   ├── Contact.js
    │   │   └── About.js
    │   │
    │   ├── services
    │   │   └── api.js
    │   │
    │   ├── styles.css
    │   ├── App.js
    │   └── index.js
    │
    └── package.json

------------------------------------------------------------
BACKEND EXPLANATION
------------------------------------------------------------

main.py
-------
Entry point of the FastAPI application.
Configures CORS and includes API routers.

database.py
-----------
Creates the SQLAlchemy database engine and session.

models.py
---------
Defines database models:
• Job
• Application

schemas.py
----------
Defines request and response schemas for API validation.

routers/jobs.py
---------------
Handles job operations:
• Create job
• Get jobs
• Update job
• Delete job

routers/applications.py
-----------------------
Handles job application operations:
• Apply to job
• View applications
• Delete applications

------------------------------------------------------------
FRONTEND EXPLANATION
------------------------------------------------------------

components
----------
Reusable UI components such as Header, Footer, and JobCard.

pages
-----
Main application pages:
• Home (shows job listings)
• Admin (post new jobs)
• Apply (submit job application)
• EditJob (edit existing jobs)
• Applications (view applications)
• Contact (contact form)
• About (project info)

services/api.js
---------------
Axios configuration used to connect React frontend with FastAPI backend.

styles.css
----------
Global styling including:
• Job cards
• Tables
• Forms
• Dark mode

------------------------------------------------------------
HOW TO RUN PROJECT LOCALLY
------------------------------------------------------------

1. Clone repository

git clone https://github.com/Saurabhkumar726/Unizoy-Job-Board.git


2. Backend setup

cd backend

Create virtual environment

python -m venv venv

Activate virtual environment

Windows:
venv\Scripts\activate

Install dependencies

pip install -r requirements.txt

Run backend

uvicorn app.main:app --reload


3. Frontend setup

cd frontend

Install dependencies

npm install

Run React application

npm start


Frontend runs at:
http://localhost:3000

Backend runs at:
http://localhost:8000

------------------------------------------------------------
FUTURE IMPROVEMENTS
------------------------------------------------------------

• User authentication (Login/Register)
• Role based admin panel
• Resume file upload
• Email notifications
• Pagination and filtering
• Job categories and tags

------------------------------------------------------------
AUTHOR
------------------------------------------------------------

Saurabh Kumar

LinkedIn
https://www.linkedin.com/in/the-saurabhkumar

GitHub
https://github.com/Saurabhkumar726
