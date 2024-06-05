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
fkGrupo INT,
CONSTRAINT fkGrupoPost FOREIGN KEY (fkGrupo) REFERENCES grupo(idGrupo),
fkRespondido INT,
CONSTRAINT fkRespostaPost FOREIGN KEY (fkRespondido) REFERENCES postagem(idPostagem),
fkUsuarioRespondido INT,
CONSTRAINT fkRespostaUsuario FOREIGN KEY (fkUsuarioRespondido) REFERENCES postagem(fkUsuario)
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
INSERT INTO usuario VALUES (default, "Debora", "Magalhães", "2005-07-25", "debs@gmail.com", "87654321", null);
INSERT INTO usuario VALUES (default, "Jorge", "Fonseca", "2005-07-25", "jorginho@gmail.com", "87651234", null);
INSERT INTO usuario VALUES (default, "Mariana", "Ramos", "2005-07-25", "marii@gmail.com", "54321234", null);

INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, 1, "Essa sessão trata apenas sobre Ansiedade", default, 1);
INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, 2, "Tenho um amigo que tem depressão, como posso ajudar?", default, 2);
INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, 3, "Sinto que desde que comecei a terapia meu TDAH vem melhorando", default, 3);
INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, 4, "Consegui entender a importância de me alimentar da forma adequada", default, 4);
INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, 3, "Meu marido descobriu que tem TOC e não sei como ter uma boa vivência...", default, 5);
INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, 1, "Vocês sabem filmes que tratem de saúde mental de uma forma realista??", default,  6);
INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo, fkRespondido) VALUES (default, 2, "Tente se mostrar presente para ele, mas nunca force a barra", default, 2, 2);

INSERT INTO GrupoUsuario VALUES (default, 1, 1);

SELECT * FROM GrupoUsuario;
/*
SELECT idPostagem, texto, usuario.nome, dtPost FROM postagem JOIN usuario ON idUsuario = fkUsuario JOIN grupo ON fkGrupo = idGrupo WHERE idGrupo = 1;
SELECT email, senha, usuario.nome, count(fkUsuario) FROM usuario JOIN GrupoUsuario ON fkUsuario = idUsuario WHERE email = 'diego@gmail.com' AND senha = '12345678' GROUP BY fkUsuario;
*/
