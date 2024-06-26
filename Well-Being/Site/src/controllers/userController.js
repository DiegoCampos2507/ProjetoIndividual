var userModel = require("../models/userModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    userModel
      .autenticar(email, senha)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

        if (resultadoAutenticar.length == 1) {
          console.log(resultadoAutenticar);
          res.json({
            resultadoAutenticar,
            nome: resultadoAutenticar[0].nome,
            grupos: resultadoAutenticar[0].grupos,
            email: resultadoAutenticar[0].email,
            senha: resultadoAutenticar[0].senha,
            id: resultadoAutenticar[0].idUsuario,
          });

        } else if (resultadoAutenticar.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function autenticarGrupos(req, res) {
  var id = req.body.idServer;

  if (id == undefined) {
    res.status(400).send("Seu id está indefinido!");
  } else {
    userModel
      .autenticarGrupos(id)
      .then(function (resultadoAutenticar) {
        console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
        console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String
      
          console.log(resultadoAutenticar);
          res.json({
            resultadoAutenticar,
          });

      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao coletar os grupos do Usuário! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var sobrenome = req.body.sobrenomeServer;
  var nasc = req.body.nascServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (nome == undefined) {
    res.status(400).send("Seu nome está indefinido!");
  } else if (sobrenome == undefined) {
    res.status(400).send("Seu sobrenome está indefinido!");
  } else if (nasc == undefined) {
    res.status(400).send("Sua data de nascimento está indefinida!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está indefinido!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  }

  userModel
    .cadastrar(nome, sobrenome, nasc, email, senha)
    .then(function (resposta) {
      res.json(resposta);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizarDados(req, res) {
  var nome = req.body.nomeServer;
  var senha = req.body.senhaServer;
  var email = req.body.emailServer;
  var id = req.body.idServer;

  userModel.atualizarDados(nome, senha, email, id)
  .then(function(resposta) {
    res.json(resposta);
  }) 
  .catch(function(erro) {
    console.log(
      "\nHouve um erro ao realizar a atualização! Erro: ",
      erro.sqlMessage
    );
    res.status(500).json(erro.sqlMessage);
  })
}

module.exports = {
  autenticar,
  cadastrar,
  autenticarGrupos,
  atualizarDados,
};
