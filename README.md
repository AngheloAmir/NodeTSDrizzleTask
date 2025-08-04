# 📝 Simple Todo App API + UI (No Auth, No Deployment Required)

A full-stack Todo application with a **Node.js + Express + TypeScript** backend and a **React** frontend, using **PostgreSQL** with **Drizzle ORM** and **Supabase**.

## ✨ Features

### Backend
- **Runtime:** Node.js + Express + TypeScript
- **Database:** PostgreSQL with Drizzle ORM
- **API:** RESTful endpoints for CRUD operations
- **Testing:** Jest and Supertest for API testing

### Frontend
- **Framework:** React with TypeScript

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone git@github.com:AngheloAmir/NodeTSDrizzleTask.git
cd NodeTSDrizzleTask
```

### 2. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ..
cd frontend
npm install
```

### 3. Set Up Supabase
1. Create a new project in the [Supabase Dashboard](https://app.supabase.com)
2. Note down your database password (created during project setup)
3. Get your connection string from the Supabase dashboard

### 4. Configure Environment Variables

Create a `.env` file in the backend directory:

```env
DATABASE_URL=postgresql://postgres-username:your-password@db.your-supabase-project.supabase.co:5432/postgres
```

### 5. Run Database Migrations
Run the following comand to generate a migration and make updates to the Supabase

```bash
# In the root directory
cd backend
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 6. Start the Application
In the root directory, run:

```bash
# Start the full stack app
cd backend
npm run dev
```

also run in root directory:
```bash
# start frontend development server only
cd frontend
npm run start
```


## 🌐 Access the Application

- **React Front end only** http://localhost:3000
- **Fullstack** http://localhost:8000/
