var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController")

router.post("/cadastrar", function (req, res) {
    userController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    userController.autenticar(req, res);
});

router.post("/autenticarGrupos", function (req, res) {
    userController.autenticarGrupos(req, res);
});

router.post("/visualizar", function (req, res) {
    userController.visualizar(req, res);
});

router.post("/postar", function (req, res) {
    userController.postar(req, res);
});

router.post("/acessar", function (req, res) {
    userController.acessar(req, res);
});

router.post("/participar", function (req, res) {
    userController.participar(req, res);
});

router.post("/remover", function(req, res) {
    userController.remover(req, res);
});

router.post("/contagem", function(req, res) {
    userController.contagem(req, res);

});

router.post("/acessar")
module.exports = router;
