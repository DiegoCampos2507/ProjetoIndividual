const { deletar } = require("../controllers/userController");
var database = require("../database/config");

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
    participar,
    remover,
    contagem
};