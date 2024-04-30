var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, nasc, email, senha) {
    var instrucao = `
        INSERT INTO usuario (nome, nasc, email, senha) VALUES ('${nome}', '${nasc}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};