var userModel = require("../models/userModel");

function listar(req, res) {

    userModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var nasc = req.body.nascServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está indefinido!");
    }else if (nasc == undefined) {
        res.status(400).send("Sua data de nascimento está indefinida!");
    }else if (email == undefined) {
        res.status(400).send("Seu email está indefinido!");
    }else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }

    userModel.cadastrar(nome, nasc, email, senha)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                })
}

module.exports = {
    listar,
    cadastrar
}