const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/uploads');

const upload = multer(uploadConfig)
const routes = express.Router();

// routes
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


// sessions
routes.post('/sessions', SessionController.store);
routes.get('/sessions', SessionController.index);

// spot
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);

// dashboard 
routes.get('/dashboard', DashboardController.show);

// booking 
routes.post('/spots/:spot_id/bookings', BookingController.store);


module.exports = routes;
