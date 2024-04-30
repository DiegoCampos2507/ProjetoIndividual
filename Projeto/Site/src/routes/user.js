var express = require("express");
var router = express.Router();

var userController = require("../controllers/userController")

router.post("/cadastrar", function (req, res) {
    userController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    userController.listar(req, res);
});

module.exports = router;
