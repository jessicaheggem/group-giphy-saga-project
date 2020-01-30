CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

-- create favorites table to collect favorites saved by user
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" VARCHAR(255),
	"category_id" INT REFERENCES "category"
);

-- JOINS category name and favorites url on category id and favorites category_id
SELECT "category".name, "favorites".url FROM "favorites"
JOIN "category" ON "favorites".category_id = "category".id;