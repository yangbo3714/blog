const express = require('express')
const home = express.Router()
home.get('/index',(req,res) => {
	res.render('home/index')
});

home.get('/center',(req,res) => {
	res.render('home/center')
});
home.get('/login',(req,res) => {
	res.render('home/login')
});
home.get('/register', (req, res) => {
	res.render('home/register');
});


module.exports = home