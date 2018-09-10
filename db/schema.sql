CREATE DATABASE stacks_db;
USE stacks_db;

CREATE TABLE stacks (
    id INT AUTO_INCREMENT NOT NULL,
    stacks_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);