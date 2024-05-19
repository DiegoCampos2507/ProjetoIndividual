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

CREATE TABLE visualizadas (
idVisualizadas INT AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT fkUsuarioVisualizadas FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkVisualizadas PRIMARY KEY (idVisualizadas, fkUsuario)
);

CREATE TABLE postagem (
idPostagem INT AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT fkUsuarioPostagem FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkPostagem PRIMARY KEY (idPostagem, fkUsuario),
texto VARCHAR(90),
dtPost DATETIME,
fkVisualizada INT, 
CONSTRAINT fkVizualizadaPostagem FOREIGN KEY (fkVisualizada) REFERENCES visualizadas(idVisualizadas)
);

INSERT INTO grupo VALUES 
(default, "Ansiedade"),
(default, "Depressão"),
(default, "TDAH"),
(default, "Transtorno Alimentar"),
(default, "TOC"),
(default, "Outras");

INSERT INTO postagem VALUES (
default,
2,
'Isso é um teste2',
'2024-05-18 23:20:00',
null
);

INSERT INTO GrupoUsuario VALUES (default, 1, 1);

SELECT * FROM usuario LEFT JOIN GrupoUsuario ON fkUsuario = idUsuario;


SELECT email, senha, usuario.nome, count(fkUsuario) FROM usuario JOIN GrupoUsuario ON fkUsuario = idUsuario WHERE email = 'diego@gmail.com' AND senha = '12345678' GROUP BY fkUsuario;