var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
    listar
};