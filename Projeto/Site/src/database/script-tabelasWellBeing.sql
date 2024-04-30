CREATE DATABASE WellBeing;

USE WellBeing;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtNasc DATE,
    email VARCHAR(45),
    senha VARCHAR(45)
);

SELECT * FROM usuario;