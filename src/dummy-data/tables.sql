-- tables

CREATE TABLE teams (
    id INTEGER AS IDENTITY GENERATED BY DEFAULT,
    name TEXT UNIQUE,
    token TEXT
);

CREATE TABLE users (
    id INTEGER AS IDENTITY GENERATED BY DEFAULT,
    name TEXT,
    user_name TEXT UNIQUE,
    password TEXT,
);

CREATE TABLE tasks (
    id INTEGER AS IDENTITY GENERATED BY DEFAULT,
    title TEXT,
    status TEXT,
    content TEXT,
    team_id INTEGER REFERENCES teams(id),
    created_by INTEGER REFERENCES users(id),
    modified_by INTEGER REFERENCES users(id),
    date_created DATE,
    date_completed DATE
);

CREATE TABLE teams_users (
    id INTEGER AS IDENTITY GENERATED BY DEFAULT,
    team_id INTEGER REFERENCES teams(id),
    user_id INTEGER REFERENCES users(id)
);