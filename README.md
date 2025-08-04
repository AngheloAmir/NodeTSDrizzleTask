# 📝 Todo App (Full stack)

A simple full-stack Todo application built with **Node.js**, **Express**, **TypeScript**, and **React**, using **PostgreSQL** and **Drizzle ORM**.

## ✨ Features

- **Backend:** Node.js + Express + TypeScript  
- **Frontend:** React (served from the backend)  
- **Database:** PostgreSQL with Drizzle ORM  
- **Testing:** Jest and Supertest  

Access the full stack application at: [http://localhost:8000](http://localhost:8000)

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone git@github.com:AngheloAmir/NodeTSDrizzleTask.git
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Set Up Supabase and Drizzle ORM
Create a new project in the [Supabase Dashboard](https://app.supabase.com) and dont forget about your password for that Supabase project. This asked during project set up.

---

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add the following variable:

```env
DATABASE_URL=postgresql://username:password@host/database_name
```

You can find your connection string in the **Supabase dashboard** in **Connect** button  
>📘 Learn more about connection pooling in the [Supabase documentation](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler)

---

### 5. Run Migrations

Once the `DATABASE_URL` is correctly set in the `.env` file, generate and run your database migrations:

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

These commands will create and apply the necessary SQL migrations to your Supabase project.

>📘 Learn more about setting up in the  [Drizzle with Supabase documentation](hhttps://orm.drizzle.team/docs/tutorials/drizzle-with-supabase)


---


### 6. Start the Application

```bash
npm run dev
```

---

### 7. Access the App

Open your browser and navigate to:

```
http://localhost:8000
```

You should now see the Todo app in action!
