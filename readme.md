# SWE Backend Project(backenduser)

## Overview
This project implements backend for user's services.

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

## Setup Instructions
1. Clone the repository(backenduser)
2. Install dependencies in the project directory
```bash
npm install
```
3. Configure environment variables
   Create a .env.local file in project directory and add the enviroment variable
   ```bash
     - `PORT=3000 # Replace with your desired port number
     - `MONGO_URL=mongodb+srv://kumarsateesh838:Newkapass1!@cluster0.c4djp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 # Replace with your own 
     connection string
     - `SECRET_KEY=rtiugh489u6ngiy895jgberhj # Replace with your own secret key
   ```
5. Start  backenduser service
```bash
npm start
```

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


### 2. `POST (http://localhost:3000)/auth/login` - User Login

#### Request:
```
{
    "email":"kumarsahil838@gmail.com",
    "password":"12Sateesh!hfh"
}
```
#### Response:
```
{
    "message": "User signed in successfully",
    "username": "sahil",
    "email": "kumarsahil838@gmail.com",
    "role": "user"
}
```


### 3. `GET (http://localhost:3000)/notes` - Fetch User's Notes

#### Request:
```
hit the url but first it may show you empty if there are no notes create by user so first create notes and then hit the url then it will return all the notes.
```
#### Response:
```
[
    {
        "_id": "6793e42bc4e8efd6af79d096",
        "title": "Home",
        "description": "This is my home",
        "userId": "6793e1c5c4e8efd6af79d092",
        "__v": 0
    },
    {
        "_id": "6793e440c4e8efd6af79d098",
        "title": "Hotel",
        "description": "This is my hotel",
        "userId": "6793e1c5c4e8efd6af79d092",
        "__v": 0
    }
]
```


### 4. `POST (http://localhost:3000)/notes` - Create New Note

#### Request:
```
{
    "title":"Hotel",
    "description":"This is my hotel"
}
```
#### Response:
```
{
    "message": "Note created successfully",
    "note_details": {
        "title": "Hotel",
        "description": "This is my hotel",
        "userId": "6793e1c5c4e8efd6af79d092",
        "_id": "6793e440c4e8efd6af79d098",
        "__v": 0
    }
}
```


### 5. `PATCH (http://localhost:3000)/notes/idofthenote(6793e42bc4e8efd6af79d096)` - Update Note

#### Request:
```
{
  "title": "Updated Note Title",
  "description": "This is the updated description of the note"
}
```
#### Response:
```
6793e42bc4e8efd6af79d096
```


### 6. `DELETE (http://localhost:3000)/note/ifofthenode(6793e42bc4e8efd6af79d096)` - Delete Note

#### Request:
```
hit the url
```
#### Response:
```
no message as delete operation returns no content.
```

## Security Features
- JWT-based authentication
- Role-based access control
- Secure cross-backend communication
- Input validation
- Error handling






