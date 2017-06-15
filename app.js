const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const port = process.env.PORT || 8989
const google = require("googleapis")
const path = require("path")
const google = require("googleapis")
const OAuth2 = google.oauth.0Auth2

const oauthClient = new OAuth ({
	CLIENT_ID: "808472990698-rlebin6e11p5arb731hcdboen0erlbp5.apps.googleusercontent.com",
	CLIENT_SECRET: "HQ0FjS4QTPbaHciO6nQIE0sC"
})

google.options({
	auth: oauth2Client
})
	
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

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`)
})
