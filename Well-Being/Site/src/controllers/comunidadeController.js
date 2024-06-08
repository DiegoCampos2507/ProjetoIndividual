var comunidadeModel = require("../models/comunidadeModel");

function participar(req, res) {
    var idGrupo = req.body.idGrupoServer;
    var idUsuario = req.body.idUsuarioServer;

    comunidadeModel.participar(idGrupo, idUsuario)
        .then(function (resposta) {
            res.json({
                resposta
            })
        })
};

function remover(req, res) {
    var idGrupo = req.body.idGrupoServer;
    var idUsuario = req.body.idUsuarioServer;

    comunidadeModel.remover(idGrupo, idUsuario)
        .then(function (resposta) {
            res.json({
                resposta
            })
        })
};

function contagem(req, res) {
    comunidadeModel.contagem()
        .then(function (contador) {
            res.json(
                contador
            )
        })
};

module.exports = {
    participar,
    remover,
    contagem,
};