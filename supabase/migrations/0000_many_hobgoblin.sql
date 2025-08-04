CREATE TABLE "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text DEFAULT 'todo',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"is_done" boolean DEFAULT false NOT NULL
);
