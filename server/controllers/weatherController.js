const axios = require('axios');

module.exports = {
    getWeather: async (req, res) => {
        try {
            console.log('body: ', req.body)
            let response = await axios.get(`https://api.darksky.net/forecast/c3f5199a4cecb62000b325a1c9f191a6/${req.body.coordinates}?lang=ru&units=si`);
            if (response.statusText === 'OK') {
                res.status(200).json(response.data);
            } else {
                res.status(404).json({
                    message: 'Don\'t find by your params'
                })
            }
        } catch(e) {
            res.status(500).json({
                message: `Server error: ${e}`
            })
        }
    }
}