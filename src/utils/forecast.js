const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7180aac380a211a6f59853956ef3fa0d&query=' + latitude + ',' + longitude + ''
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback(`Unable to find location.`, undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like there are ${body.current.feelslike} degrees. The humidity is ${body.current.humidity}%`)
        }
    }) 
}

module.exports = forecast