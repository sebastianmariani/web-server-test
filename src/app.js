const path = require('path')
const express = require('express')

const app = express()

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Frank'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Frank'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        error: 'An error'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'philadelphia',
        longitude: 30.404,
        latitude: 10.455
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})