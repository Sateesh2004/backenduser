# SWE Backend Project(backenduser)

## Overview
This project implements two interconnected backend services with role-based access control (RBAC) using TypeScript, Express, Node.js, and MongoDB.

## Project Structure
- `backenduser/`: User-focused backend service
- `backendadmin/`: Administrative backend service

## Technologies
- TypeScript
- Express.js
- Node.js
- MongoDB
- JWT Authentication

## backenduser: User Backend Features
- User registration and authentication
- CRUD operations for user notes
- Secure data sharing with Admin Backend

### Key Endpoints
- `POST /auth/register`: User registration
- `POST /auth/login`: User login
- `GET /notes`: Fetch user's notes
- `POST /notes`: Create new note
- `PATCH /notes/:id`: Update note
- `DELETE /notes/:id`: Delete note

### 1. `POST (http://localhost:3000)/auth/register` - User Registration

#### Request:
```
{
    "name":"sahil",
    "email":"kumarsahil838@gmail.com",
    "password":"12Sateesh!hfh",
    "password_cofirmation":"12Sateesh!hfh"
}
```
#### Response:
```
{
    "message": "User registered successfully"
}
```


## Setup Instructions
1. Clone the repository(backenduser)
2. Install dependencies in the project directory
```bash
npm install
```
3. Configure environment variables
   Create a .env.local file in project directory and add the enviroment variable
     PORT=3000 # Replace with your desired port number
     MONGO_URL=mongodb+srv://kumarsateesh838:Newkapass1!@cluster0.c4djp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 # Replace with your own 
     connection string
     SECRET_KEY=rtiugh489u6ngiy895jgberhj # Replace with your own secret key
5. Start  backenduser service
```bash
npm start
```

## Security Features
- JWT-based authentication
- Role-based access control
- Secure cross-backend communication
- Input validation
- Error handling






