CREATE DATABASE ninjasgames;

USE ninjasgames;

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    made_by VARCHAR(255) NOT NULL, 
    gender VARCHAR(255) NOT NULL
);
