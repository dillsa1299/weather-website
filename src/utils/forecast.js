const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ffde0f24ca31868c7364457158b72b9&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find weather location.', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 
            ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The local date & time is ' + body.location.localtime)
        }
    })
}

module.exports = forecast