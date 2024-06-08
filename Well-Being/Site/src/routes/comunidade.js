var express = require("express");
var router = express.Router();

var comunidadeController = require("../controllers/comunidadeController")

router.post("/participar", function (req, res) {
    comunidadeController.participar(req, res);
});

router.post("/remover", function(req, res) {
    comunidadeController.remover(req, res);
});

router.post("/contagem", function(req, res) {
    comunidadeController.contagem(req, res);

});

module.exports = router;