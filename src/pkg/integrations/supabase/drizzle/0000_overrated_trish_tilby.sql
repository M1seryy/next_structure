CREATE TABLE "books" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"author" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
