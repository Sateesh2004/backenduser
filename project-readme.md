# SWE Backend Project

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

## Backend 1: User Backend Features
- User registration and authentication
- CRUD operations for user notes
- Secure data sharing with Admin Backend

### Key Endpoints
- `POST /auth/register`: User registration
- `POST /auth/login`: User login
- `GET /notes`: Fetch user notes
- `POST /notes`: Create new note
- `PATCH /notes/:id`: Update note
- `DELETE /notes/:id`: Delete note

## Backend 2: Admin Backend Features
- Admin authentication
- User profile management
- Cross-backend data retrieval
- Audit logging

### Key Endpoints
- `POST /auth/login`: Admin login
- `GET /users`: Fetch all user profiles
- `GET /users/:id`: Get specific user details
- `DELETE /users/:id`: Delete user profile
- `GET /audit/notes`: Retrieve notes from User Backend

## Setup Instructions
1. Clone the repository
2. Install dependencies in each backend directory
```bash
npm install
```
3. Configure environment variables
4. Start each backend service
```bash
npm start
```

## Security Features
- JWT-based authentication
- Role-based access control
- Secure cross-backend communication
- Input validation
- Error handling

## Database
- Shared MongoDB cluster
- Separate collections for users and notes
- Secure data access controls

## Documentation
- Detailed README in each backend directory
- Postman collection for API testing

## License
[Specify your license]
