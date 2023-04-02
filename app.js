const express = require('express')
const mustacheExpress = require('mustache-express')
require('dotenv').config()
const app = express()

const PORT = process.env.PORT || 8081 


// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
// the pages are located in views directory
app.set('views', './views')
// extension will be .mustache
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log('Server is running...')
})
