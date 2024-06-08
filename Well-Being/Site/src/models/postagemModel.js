const { deletar } = require("../controllers/postagemController");
var database = require("../database/config");

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

module.exports = {
    visualizar,
    postar,
    postarResposta,
    acessar,
}