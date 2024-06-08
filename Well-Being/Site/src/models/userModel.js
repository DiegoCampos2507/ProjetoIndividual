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

module.exports = {
  cadastrar,
  autenticar,
  autenticarGrupos,
};
