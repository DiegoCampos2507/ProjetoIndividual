DROP DATABASE IF EXISTS WellBeing;
CREATE DATABASE WellBeing;

USE WellBeing;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    dtNasc DATE,
    email VARCHAR(45),
    senha VARCHAR(45),
    apelido VARCHAR(45)
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

CREATE TABLE postagem (
idPostagem INT AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT fkUsuarioPostagem FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
CONSTRAINT pkPostagem PRIMARY KEY (idPostagem, fkUsuario),
texto VARCHAR(1000),
dtPost TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
fkVisualizada INT, 
CONSTRAINT fkVizualizadaPostagem FOREIGN KEY (fkVisualizada) REFERENCES visualizadas(idVisualizadas),
fkGrupo INT,
CONSTRAINT fkGrupoPost FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo)
);

INSERT INTO grupo VALUES 
(default, "Ansiedade"),
(default, "Depressão"),
(default, "TDAH"),
(default, "Transtorno Alimentar"),
(default, "TOC"),
(default, "Outras");

SELECT * FROM usuario;
SELECT * FROM postagem;
SELECT * FROM GrupoUsuario;

INSERT INTO usuario VALUES (default, "Diego", "Campos", "2005-07-25", "diego@gmail.com", "12345678", null);

INSERT INTO postagem VALUES (default, 1, "Olá", default, null, 1);
INSERT INTO postagem VALUES (default, 1, "Olá", default, null, 2);
INSERT INTO postagem VALUES (default, 1, "Olá", default, null, 3);
INSERT INTO postagem VALUES (default, 1, "Olá", default, null, 4);
INSERT INTO postagem VALUES (default, 1, "Olá", default, null, 5);
INSERT INTO postagem VALUES (default, 1, "Olá", default, null, 6);

DELETE FROM postagem WHERE idPostagem = 6;

INSERT INTO GrupoUsuario VALUES (default, 1, 1);

SELECT * FROM GrupoUsuario;
/*
SELECT idPostagem, texto, usuario.nome, dtPost FROM postagem JOIN usuario ON idUsuario = fkUsuario JOIN grupo ON fkGrupo = idGrupo WHERE idGrupo = 1;
SELECT email, senha, usuario.nome, count(fkUsuario) FROM usuario JOIN GrupoUsuario ON fkUsuario = idUsuario WHERE email = 'diego@gmail.com' AND senha = '12345678' GROUP BY fkUsuario;
*/