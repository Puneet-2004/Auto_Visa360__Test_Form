# Visa Application System

A modern web-based visa application platform with React frontend and Node.js backend.

## Features
- Multi-step visa application form
- Real-time form validation
- Secure data handling
- Application tracking
- Responsive design

## Tech Stack
- Frontend: React, TypeScript
- Backend: Node.js, Express, MongoDB
- API: RESTful architecture

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd visa-app
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd backend
npm install
```

4. Start MongoDB server

5. Start the backend server:
```bash
cd backend
node server.js
```

6. Start the frontend development server:
```bash
npm start
```

## Project Structure
```
visa-app/
├── public/             # Static files
├── src/                # Frontend source code
│   ├── components/     # React components
│   ├── services/       # API services
│   └── App.tsx         # Main application component
├── backend/            # Backend code
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── server.js       # Backend server
└── README.md           # Project documentation
```

## API Endpoints
- POST /api/visa-applications - Submit new application
- GET /api/visa-applications - Get all applications
- GET /api/visa-applications/:id - Get specific application

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
MIT 
