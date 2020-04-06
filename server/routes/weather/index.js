const router = require('express').Router();
const weatherController = require('../../controllers/weatherController');

router.get('/getWeather', weatherController.getWeather);

module.exports = router;