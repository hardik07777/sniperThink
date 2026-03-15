

# 1. Project Overview

This project consists of two major parts:

### Frontend – Interactive Strategy Flow

A React-based interactive section designed to visually explain the SniperThink strategy process using scroll-based storytelling and animations.

### Backend – Distributed File Processing System

A scalable backend system that allows users to upload files and process them asynchronously using background workers and a queue system.

---

# 2. System Architecture

The system is built using a decoupled architecture where the frontend and backend operate independently.

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
Worker Processes
 ↓
PostgreSQL Database
```

This design ensures scalability, performance, and maintainability.

---

# 3. Frontend Documentation

## Technology Stack

* React (Functional Components + Hooks)
* Framer Motion for animations
* Axios for API requests
* Vite for development and build

---

## Frontend Architecture

```
frontend/src
│
├── components
│   ├── StrategySection
│   ├── StrategyStep
│   ├── StrategyVisual
│   └── InterestModal
│
├── data
│   └── steps.js
│
├── services
│   └── api.js
│
└── pages
```

### Key Components

**StrategySection**

Main container that controls the scroll-driven storytelling experience.

Responsibilities:

* Detect active step during scroll
* Update visual content
* Manage step transitions

---

**StrategyStep**

Represents each step in the strategy flow.

Features:

* Viewport-based animations
* Scroll triggered transitions
* User interaction support

---

**StrategyVisual**

Displays visuals corresponding to the currently active strategy step.

Responsibilities:

* Animate transitions
* Dynamically render visuals

---

**InterestModal**

Allows users to submit their interest in a strategy step.

Features:

* Form submission
* API integration
* Loading and success states

---

## Animation Logic

Animations are implemented using **Framer Motion**.

Key animation techniques used:

• Scroll-based animation using `useScroll()`
• Transform animations using `useTransform()`
• Viewport-triggered animations
• Hover and click interactions

The animation system ensures smooth storytelling and improved user engagement.

---

## State Management

State management is implemented using React hooks.

Main states include:

• Active strategy step
• Modal open/close state
• Form input state
• API loading state

This approach keeps the application lightweight while maintaining predictable UI behavior.

---

## API Integration

Frontend communicates with the backend using Axios.

Example configuration:

```
const api = axios.create({
  baseURL: "https://sniperthink-dln2.onrender.com/api"
})
```

Interest submission endpoint:

```
POST /api/interest
```

Request body:

```
{
  "name": "John Doe",
  "email": "john@example.com",
  "step": "Momentum Strategy"
}
```

---

# 4. Backend Documentation

The backend implements a **distributed file processing system** capable of handling asynchronous tasks using background workers.

---

## Technology Stack

* Node.js
* Express.js
* Redis (Queue management)
* PostgreSQL (Database)
* Background Workers

---

## Backend Architecture

```
backend
│
├── controllers
├── routes
├── services
├── workers
├── models
└── config
```

---

## File Upload Flow

```
User uploads file
        ↓
Express API receives file
        ↓
File stored on server
        ↓
Job created in database
        ↓
Job pushed to Redis queue
        ↓
Worker picks job
        ↓
Worker processes file
        ↓
Results stored in database
```

---

## Worker Processing

Workers perform the following tasks:

• Read uploaded file
• Extract text content
• Calculate word count
• Count paragraphs
• Identify most frequent keywords

Example result:

```
{
 "jobId": "12345",
 "wordCount": 1200,
 "paragraphCount": 35,
 "topKeywords": ["system", "data", "process"]
}
```

---

# 5. Database Schema

The system uses a relational database structure.

---

## Users

| Field | Type    |
| ----- | ------- |
| id    | integer |
| name  | string  |
| email | string  |

---

## Files

| Field       | Type      |
| ----------- | --------- |
| id          | integer   |
| user_id     | integer   |
| file_path   | string    |
| uploaded_at | timestamp |

---

## Jobs

| Field      | Type      |
| ---------- | --------- |
| id         | integer   |
| file_id    | integer   |
| status     | string    |
| progress   | integer   |
| created_at | timestamp |

Job status values:

* pending
* processing
* completed
* failed

---

## Results

| Field           | Type       |
| --------------- | ---------- |
| id              | integer    |
| job_id          | integer    |
| word_count      | integer    |
| paragraph_count | integer    |
| keywords        | text array |

---

# 6. API Documentation

---

## Submit Interest

Endpoint:

```
POST /api/interest
```

Request:

```
{
 "name": "John Doe",
 "email": "john@example.com",
 "step": "Momentum Strategy"
}
```

Response:

```
{
 "success": true,
 "message": "Interest received"
}
```

---

## Upload File

Endpoint:

```
POST /api/upload
```

Description:

Uploads a file and creates a background processing job.

---

## Check Job Status

Endpoint:

```
GET /api/job/:id
```

Example response:

```
{
 "jobId": "12345",
 "status": "processing",
 "progress": 60
}
```

---

## Get Processed Results

Endpoint:

```
GET /api/results/:jobId
```

Example response:

```
{
 "jobId": "12345",
 "wordCount": 1200,
 "paragraphCount": 35,
 "topKeywords": ["system","data","process"]
}
```

---

# 7. Setup Instructions

## Frontend

```
cd frontend
npm install
npm run dev
```

---

## Backend

```
cd backend
npm install
node server.js
```

---

## Start Worker

```
node workers/fileWorker.js
```

---

## Requirements

• Node.js
• Redis server
• PostgreSQL database

---

# 8. Deployment

Frontend deployed on:

Vercel

Backend deployed on:

Render

---

# 9. Video Demonstration

A video walkthrough of the system explains:

• Architecture decisions
• Animation logic
• State management
• Queue and worker processing
• Live demonstration

Video link:

[Add your video link here]
