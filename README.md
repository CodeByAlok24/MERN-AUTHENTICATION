# MERN Login & Register Application

A full-stack web application built with **MongoDB**, **Express**, **React**, and **Node.js** (MERN) that provides user authentication with login and registration functionality.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Details](#project-details)

---

## ✨ Features

- **User Registration**: Create a new account with username, email, and password
- **User Login**: Authenticate with email and password
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Access user data with valid JWT tokens
- **Responsive UI**: Clean and modern user interface with Tailwind CSS
- **Password Hashing**: Secure password storage using bcryptjs
- **Error Handling**: Comprehensive error messages and validation
- **Loading State**: Shows loading indicator during data fetching

---

## 🔧 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)

---

## 📁 Project Structure

```
Mern-login-register/
│
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection configuration
│   ├── middleware/
│   │   └── auth.js               # JWT authentication middleware
│   ├── models/
│   │   └── User.js               # Mongoose User schema
│   ├── routes/
│   │   └── auth.js               # Authentication routes (register, login, me)
│   ├── server.js                 # Express server entry point
│   └── .env                       # Environment variables (not in repo)
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx          # Home/Dashboard page
│   │   │   ├── Login.jsx         # Login component
│   │   │   ├── Register.jsx      # Registration component
│   │   │   └── Navbar.jsx        # Navigation bar
│   │   ├── App.jsx               # Main App component
│   │   ├── App.css               # App styles
│   │   └── main.jsx              # React entry point
│   ├── public/
│   └── index.html                # HTML template
│
├── package.json                  # Root package configuration
└── README.md                      # This file
```

---

## 📦 Installation

### Step 1: Clone or Download the Repository

```bash
# If using git
git clone <repository-url>
cd Mern-login-register
```

### Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### Step 4: Return to Root Directory

```bash
cd ..
```

---

## 📚 Dependencies

### Backend Dependencies

| Package        | Version | Purpose                               |
| -------------- | ------- | ------------------------------------- |
| `express`      | ^4.18.0 | Web framework for Node.js             |
| `mongoose`     | ^7.0.0  | MongoDB object modeling               |
| `bcryptjs`     | ^2.4.3  | Password hashing                      |
| `jsonwebtoken` | ^9.0.0  | JWT token generation and verification |
| `dotenv`       | ^16.0.0 | Environment variable management       |
| `cors`         | ^2.8.5  | Cross-Origin Resource Sharing         |

### Frontend Dependencies

| Package            | Version | Purpose                      |
| ------------------ | ------- | ---------------------------- |
| `react`            | ^18.0.0 | UI library                   |
| `react-dom`        | ^18.0.0 | React DOM rendering          |
| `react-router-dom` | ^6.0.0  | Client-side routing          |
| `axios`            | ^1.0.0  | HTTP client for API requests |
| `tailwindcss`      | ^3.0.0  | Utility-first CSS framework  |

### Installation Command

**Backend:**

```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv cors
```

**Frontend:**

```bash
npm install react react-dom react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
```

---

## 🔐 Environment Setup

### Backend (.env file)

Create a `.env` file in the `backend/` directory with the following variables:

```env
# MongoDB Connection
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database>?appName=Cluster0

# Server Port
PORT=5000

# JWT Secret Key
JWT_SECRET=your_secret_key_here_12345
```

**How to get MongoDB URI:**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string and replace `<username>`, `<password>`, and `<database>`

---

## 🚀 Running the Application

### Option 1: Run Backend and Frontend Separately

**Terminal 1 - Start Backend:**

```bash
cd backend
npm run dev
```

Backend will run on `http://localhost:5000`

**Terminal 2 - Start Frontend:**

```bash
cd frontend
npm run dev
```

Frontend will run on `http://localhost:5173` (or another available port)

### Option 2: Run with npm scripts

**From root directory:**

**Backend:**

```bash
npm --prefix backend run dev
```

**Frontend:**

```bash
npm --prefix frontend run dev
```

---

## 🔗 API Endpoints

### Base URL

```
http://localhost:5000/api/users
```

### Endpoints

#### 1. Register User

- **POST** `/register`
- **Body:**

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

- **Response:**

```json
{
  "id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

#### 2. Login User

- **POST** `/login`
- **Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

- **Response:**

```json
{
  "id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

#### 3. Get User Profile (Protected)

- **GET** `/me`
- **Headers:**

```
Authorization: Bearer <jwt_token>
```

- **Response:**

```json
{
  "_id": "user_id",
  "username": "johndoe",
  "email": "john@example.com",
  "createdAt": "2024-02-01T10:00:00Z",
  "updatedAt": "2024-02-01T10:00:00Z"
}
```

---

## 📖 Project Details

### How It Works

1. **User Registration**
   - User fills in username, email, and password
   - Password is hashed using bcryptjs
   - User data is saved to MongoDB
   - JWT token is generated and returned

2. **User Login**
   - User enters email and password
   - System verifies credentials against stored hash
   - JWT token is generated if credentials are valid
   - Token is stored in localStorage

3. **Protected Routes**
   - JWT middleware verifies token on protected routes
   - User data is extracted from token
   - Only authenticated users can access `/me` endpoint

4. **Frontend Features**
   - Loading state during initial data fetch
   - Auto-redirect to home if already logged in
   - Auto-redirect to login if token is invalid
   - Persistent authentication using localStorage

### Security Features

- ✅ Passwords hashed with bcryptjs (10 salt rounds)
- ✅ JWT tokens with 30-day expiration
- ✅ Protected API endpoints with middleware
- ✅ Environment variables for sensitive data
- ✅ Input validation on both frontend and backend

---

## 🛠️ Troubleshooting

### MongoDB Connection Error

```
MongoNetworkError: Failed to connect to MongoDB
```

**Solution:** Check your MONGO_URI in `.env` file and ensure MongoDB is running.

### CORS Error

```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:** Ensure the backend is running and the frontend is making requests to the correct URL.

### Port Already in Use

```
Error: listen EADDRINUSE :::5000
```

**Solution:** Change the PORT in `.env` or kill the process using the port.

### JWT Token Errors

```
Invalid token
```

**Solution:** Ensure JWT_SECRET is the same in both registration and login, and token hasn't expired.

---

## 📝 Commands Reference

| Command       | Description               |
| ------------- | ------------------------- |
| `npm install` | Install all dependencies  |
| `npm run dev` | Start development server  |
| `npm start`   | Start production server   |
| `npm test`    | Run tests (if configured) |

---

For issues or questions, please contact the project maintainer or create an issue in the repository.

---

**Happy Coding! 🎉**
