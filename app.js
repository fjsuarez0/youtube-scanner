const express = require("express")
const app = express()
const exphbs = require("express-handlebars")
const port = process.env.PORT || 8989
const google = require("googleapis")
const path = require("path")

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  

app.set('views', path.join(__dirname, 'views')) 

// Test vim-fugitive 
// 
app.get('/', (req, res) => {  
  res.render('home', {
    name: 'John'
  })
})

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`)
})
