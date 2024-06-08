var postagemModel = require("../models/postagemModel");


function visualizar(req, res) {
    var id = req.body.idServer;

    postagemModel.visualizar(id)
        .then(function (resposta) {

            console.log(resposta);
            if (resposta.length) {

                res.json({
                    resposta,
                    idPostagem: resposta[0].idPostagem,
                    texto: resposta[0].texto,
                    dtPost: resposta[0].dtPost,
                    nome: resposta[0].nome
                });
            } else {
                res.json("vazio")
            }
        })
}

function postar(req, res) {
    var post = req.body.postServer;
    var idUsuario = req.body.idUsuarioServer;
    var idGrupo = req.body.idGrupoServer;

    postagemModel.postar(post, idUsuario, idGrupo)
        .then(function (resposta) {
            res.json({
                resposta
            });
        })
}

function postarResposta(req, res) {
    var post = req.body.postServer;
    var idUsuario = req.body.idUsuarioServer;
    var idGrupo = req.body.idGrupoServer;
    var fkrespondido = req.body.fkRespondidoServer;

    postagemModel.postarResposta(post, idUsuario, idGrupo, fkrespondido)
        .then(function (resposta) {
            res.json({
                resposta
            });
        })
}

function acessar(req, res) {
    var comunidade = req.body.idGrupoServer;
    
    postagemModel.acessar(comunidade)
    .then(function (resposta) {
      if (resposta.length > 0) {
        res.json({
          resposta,
          idPostagem: resposta[0].idPostagem,
          texto: resposta[0].texto,
          dtPost: resposta[0].dtPost,
          nome: resposta[0].nome
        })
      } else {
        res.json("vazio")
      }
    })
    
  }

module.exports = {
    visualizar,
    postar,
    postarResposta,
    acessar,
}