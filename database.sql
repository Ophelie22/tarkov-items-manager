BEGIN;

    DROP TABLE IF EXISTS "user";
    DROP TABLE IF EXISTS "dealer";
    DROP TABLE IF EXISTS "item";
    DROP TABLE IF EXISTS "quest";
    DROP TABLE IF EXISTS "stocke";
    DROP TABLE IF EXISTS "appartient_h";
    DROP TABLE IF EXISTS "appartient_q";

CREATE TABLE "item" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL,
        "img_url" TEXT NOT NULL,
        "dealer" TEXT NOT NULL
    );

CREATE TABLE "hideout_objective" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL,
        "level" INT NOT NULL,
        "done" BOOLEAN NOT NULL,
        "id_item" INT REFERENCES "item"("id")
    );

CREATE TABLE "quest" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL,
        "xp" INT NOT NULL,
        "done" BOOLEAN NOT NULL,
        "id_item" INT REFERENCES "item"("id")
    );

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "id_item" INT REFERENCES "item"("id"),
    "id_hideout_objective" INT REFERENCES "hideout_objective"("id"),
    "id_quest" INT REFERENCES "quest"("id")
    );

CREATE TABLE "dealer" (
        "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        "name" TEXT NOT NULL,
        "id_quest" INT REFERENCES "quest"("id")
    );


CREATE TABLE "appartient_q" (
    "quantity" INT NOT NULL
);

CREATE TABLE "appartient_h" (
    "quantity" INT NOT NULL
);

CREATE TABLE "stocke" (
    "quantity" INT NOT NULL
);

COMMIT;