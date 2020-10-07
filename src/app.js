const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        error: 'An error',
        title: 'Help',
        name: 'Frank'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'philadelphia',
        longitude: 30.404,
        latitude: 10.455
    })
})

app.get('/help/*',(req, res) => {
    res.render('404', {
        title: '404',
        name: 'Frank',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Frank',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.')
})