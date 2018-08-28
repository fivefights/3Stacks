CREATE DATABASE omelette_db;
USE omelette_db;

CREATE TABLE omelettes (
    id AUTO_INCREMEMNT NOT NULL,
    omelette_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);