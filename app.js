const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

app.engine('handlebars',exphbs({
	partialsDir: [{
		dir: path.join(__dirname, 'views', 'home', 'partials'),
		namespace: 'home'
	},{
		dir: path.join(__dirname, 'views', 'admin', 'partials'),
		namespace: 'admin'
	}],
	layoutsDir:path.join(__dirname,'views','layouts'),
	defaultLayout: 'home'
}))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','handlebars')
app.use(express.static(path.join(__dirname,'public')))
const home = require('./routes/home.js')
const admin = require('./routes/admin.js')
app.use('/home',home)
//app.use('/admin',admin)

app.listen(3000,err => {
	if(!err){
		console.log('服务器启动成功')
	}
})