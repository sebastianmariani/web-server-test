const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name: 'Tim',
        age: 29
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>about</h1>')
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