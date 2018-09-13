let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')


//Template engine 
app.set('view engine', 'ejs')

// middlewares
app.use(express.static('public')) // dossier contient les statics
app.use(bodyParser.urlencoded({extended: false}))

app.use(session({
	secret: 'beer',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: false }
  }))


app.get('/', (req, res) => {
	res.render('index')
})




  app.listen(8888)
