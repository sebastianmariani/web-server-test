const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, '../public')))

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