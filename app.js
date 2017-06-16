const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const port = process.env.PORT || 8989
const google = require("googleapis")
const path = require("path")
const OAuth2 = google.auth.OAuth2



const oauth2Client = new OAuth2 ({
	CLIENT_ID: "808472990698-rlebin6e11p5arb731hcdboen0erlbp5.apps.googleusercontent.com",
	CLIENT_SECRET: "HQ0FjS4QTPbaHciO6nQIE0sC"
})

google.options({
	auth: oauth2Client
})

app.use(express.static("public"))

app.engine('.hbs', exphbs({  
	defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  

app.set('views', path.join(__dirname, 'views'))  
 
app.get('/', (req, res) => {  
  res.render('home', {
    name: 'John'
  })
})

app.get("/privacy-policy", (req, res) => {
	res.render("privacypolicy")
})

app.get("/terms-of-service", (req, res) => {
	res.render("terms-of-service")
})

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`)
})
