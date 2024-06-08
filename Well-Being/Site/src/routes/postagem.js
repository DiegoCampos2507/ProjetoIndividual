var express = require("express");
var router = express.Router();

var postagemController = require("../controllers/postagemController")

router.post("/visualizar", function (req, res) {
    postagemController.visualizar(req, res);
});

router.post("/postar", function (req, res) {
    postagemController.postar(req, res);
});

router.post("/postarResposta", function (req, res) {
    postagemController.postarResposta(req, res);
});

router.post("/acessar", function (req, res) {
    postagemController.acessar(req, res);
});

module.exports = router;
