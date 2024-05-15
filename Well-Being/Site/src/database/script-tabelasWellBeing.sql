CREATE DATABASE WellBeing;

USE WellBeing;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    dtNasc DATE,
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE grupo (
	idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

CREATE TABLE GrupoUsuario (
	idGrupoUsuario INT auto_increment PRIMARY KEY,
    fkGrupo INT,
    fkUsuario INT,
    CONSTRAINT fkGrupo FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo),
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO grupo VALUES 
(default, "Ansiedade"),
(default, "Depressão"),
(default, "TDAH"),
(default, "Transtorno Alimentar"),
(default, "TOC"),
(default, "Outras");

SELECT * FROM usuario LEFT JOIN GrupoUsuario ON fkUsuario = idUsuario;

INSERT INTO GrupoUsuario VALUES 
(default, 1, 1);

SELECT email, senha, usuario.nome, count(fkUsuario) FROM usuario JOIN GrupoUsuario ON fkUsuario = idUsuario WHERE email = 'diego@gmail.com' AND senha = '12345678' GROUP BY fkUsuario;