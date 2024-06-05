const { deletar } = require("../controllers/userController");
var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucaoSql = `
  SELECT idUsuario, email, senha, usuario.nome, count(fkUsuario) AS grupos FROM usuario LEFT JOIN GrupoUsuario ON fkUsuario = idUsuario WHERE email = '${email}' AND senha = '${senha}' GROUP BY fkUsuario, nome, idUsuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function autenticarGrupos(id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", id
  );
  var instrucaoSql = `
  SELECT grupo.nome FROM usuario LEFT JOIN GrupoUsuario ON fkUsuario = idUsuario JOIN grupo ON idGrupo = fkGrupo WHERE idUsuario = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(nome, sobrenome, nasc, email, senha) {
  var instrucao = `
        INSERT INTO usuario (nome, sobrenome , dtNasc, email, senha) VALUES ('${nome}', '${sobrenome}', '${nasc}', '${email}', '${senha}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function visualizar(id) {
  console.log(`${id}`);
  var instrucao = `
  SELECT idPostagem, texto, fkUsuario, dtPost, grupo.nome FROM postagem JOIN usuario ON idUsuario = fkUsuario JOIN grupo ON fkGrupo = idGrupo WHERE idUsuario = '${id}'`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function postar(post, idUsuario, idGrupo) {
  var instrucao = `
  INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo) VALUES (default, ${idUsuario}, "${post}", default, ${idGrupo})`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function postarResposta(post, idUsuario, idGrupo, fkResposta) {
  var instrucao = `
  INSERT INTO postagem (idPostagem, fkUsuario, texto, dtPost, fkGrupo, fkRespondido) VALUES (default, ${idUsuario}, "${post}", default, ${idGrupo}, ${fkResposta})`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function acessar(comunidade) {
  var instrucao = `
  SELECT post.idPostagem, post.texto, dono.nome, post.dtPost, respondido.idPostagem AS idRespondido, respondido.texto AS RespondidoTexto, UserRespondido.nome AS RespondidoNome, respondido.dtPost AS RespondidoData FROM postagem AS post
JOIN usuario AS dono ON dono.idUsuario = post.fkUsuario 
LEFT JOIN postagem AS respondido ON post.fkrespondido = respondido.idPostagem
LEFT JOIN usuario AS UserRespondido ON UserRespondido.idUsuario = respondido.fkUsuario
JOIN grupo ON post.fkGrupo = idGrupo 
WHERE idGrupo = '${comunidade}'
ORDER BY post.idPostagem DESC`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function participar(idGrupo, idUsuario) {
  var instrucao = `
  INSERT INTO GrupoUsuario VALUES (default, ${idGrupo}, ${idUsuario});`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function remover(idGrupo, idUsuario) {
  var instrucao = `
  DELETE FROM GrupoUsuario WHERE fkGrupo = ${idGrupo} AND fkUsuario = ${idUsuario};`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function contagem() {
  var instrucao = `
  SELECT count(idPostagem) as quantidade from postagem GROUP BY fkGrupo`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrar,
  autenticar,
  autenticarGrupos,
  visualizar,
  postar,
  postarResposta,
  acessar,
  participar,
  remover,
  contagem
};
