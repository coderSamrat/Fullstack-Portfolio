# Fullstack Portfolio

A modern fullstack portfolio project with a React frontend and Node.js/Express backend.

## Features

- Responsive frontend built with React and Vite
- RESTful backend API using Node.js and Express
- Modular, maintainable code structure
- Easy local development and deployment

## Tech Stack

- **Frontend:** React, Vite, JavaScript, CSS
- **Backend:** Node.js, Express
- **Tooling:** ESLint, JSConfig

## Project Structure

```
Fullstack_Portfolio/
│
├── backend/
│   ├── package.json
│   └── src/
│       └── index.js
│
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── main.jsx
│   └── index.html
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Setup

#### 1. Clone the repository

```sh
git clone https://github.com/coderSamrat/Fullstack-Portfolio.git
cd Fullstack-Portfolio
```

#### 2. Install dependencies

For the backend:
```sh
cd backend
npm install
```

For the frontend:
```sh
cd ../frontend
npm install
```

#### 3. Run the development servers

In two separate terminals:

- **Backend:**
  ```sh
  cd backend
  npm start
  ```

- **Frontend:**
  ```sh
  cd frontend
  npm run dev
  ```

## Scripts

- `npm start` (backend): Starts the backend server.
- `npm run dev` (frontend): Starts the frontend development server.