const express = require('express')
const { dirname } = require('path')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

// html content
app.set('view engine', 'ejs')


// static asserts
const pathName = path.join(__dirname, 'public')

app.use('/static', express.static(pathName))
//home route
app.get('/', (req, res) => {
    res.render('base', {title: 'Log in system'})
}).listen(port)