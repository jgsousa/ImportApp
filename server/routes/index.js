var express = require('express');
var router = express.Router();

var links = [
    {link: "users", label: "Users"},
    {link: "perfis", label: "Perfis"},
    {link: "clientes", label: "Clientes"}
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {username: "bolachas", env: process.env.NODE_ENV, links: links});
});

module.exports = router;
