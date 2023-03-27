const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express() 

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
// the pages are located in views directory
app.set('views', './views')
// extension will be .mustache
app.set('view engine', 'mustache')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080, () => {
    console.log('Server is running...')
})