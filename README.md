# SniperThink Full Stack Hiring Assignment

This repository contains my submission for the **SniperThink Full Stack Developer Hiring Assignment**.

The assignment consists of two parts:

1. **Frontend – Interactive Strategy Flow**
2. **Backend – Distributed File Processing System**

Both parts were implemented as production-style applications focusing on scalability, clean architecture, and performance.

---

# 🚀 Live Demo

Frontend (Vercel)

https://sniper-think-wwsn.vercel.app/

Backend API (Render)

https://sniperthink-dln2.onrender.com/

# 📦 Repository Structure

```
sniperthink-assignment
│
├── sniperthink-frontend/        # React interactive strategy flow
│
├── backend/         # Distributed file processing system
│
├── docs/            # API docs, architecture, database schema
│
└── README.md
```

---

# 🧠 Architecture Overview

Frontend and backend are separated to allow **independent scaling and deployment**.

```
User
 ↓
React Frontend (Vercel)
 ↓
REST API
 ↓
Node.js / Express Backend
 ↓
Redis Queue
 ↓
Background Workers
 ↓
PostgreSQL Database
```

---

# ⚙️ Technology Stack

Frontend

* React (Functional Components + Hooks)
* Framer Motion
* Axios
* Vite

Backend

* Node.js
* Express.js
* Redis Queue
* PostgreSQL
* Background Workers

Deployment

* Vercel (Frontend)
* Render (Backend)


# 📄 Documentation

Detailed documentation can be found in the following sections:

Frontend Documentation
`frontend/README.md`

Backend Documentation
`backend/README.md`

Database Schema
`docs/database-schema.md`

API Documentation
`docs/api-docs.md`



