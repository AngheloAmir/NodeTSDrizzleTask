# Todo App Frontend

A React TypeScript application that demonstrates a simple todo list interface

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:AngheloAmir/FrontendTask.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Backend Setup

This frontend requires the backend server to be running. Please follow these steps:

1. Clone and set up the backend repository:
   ```bash
   git clone https://github.com/AngheloAmir/NodeTSDrizzleTask.git
   cd NodeTSDrizzleTask
   npm install
   ```

2. Start the backend server (refer to the backend's README for detailed instructions)

## Configuration

Before running the frontend, you need to configure the API endpoint in `src/App.tsx` if you prefer a different endpoint:

```typescript
const API_BASE = 'http://localhost:8000/api/v1/todos';
```

## Running the Application

1. Start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
