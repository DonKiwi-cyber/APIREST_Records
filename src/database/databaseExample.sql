CREATE DATABASE IF NOT EXISTS Records;

USE Records;

CREATE TABLE Tiempos(
    id INT(5) NOT NULL AUTO_INCREMENT,
    inicio TIMESTAMP NOT NULL,
    fin TIMESTAMP NOT NULL,
    tiempo TIME,
    no_movimientos INT(4) NOT NULL,
    PRIMARY KEY (id)
)
