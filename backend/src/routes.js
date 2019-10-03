import express from 'express'
import multer from 'multer'

import SessionController from './controllers/SessionController'
import SpotController from './controllers/SpotController'
import DashboardController from './controllers/DashboardController'
import BookingController from './controllers/BookingController'

import uploadConfig from './config/upload'


const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store)

routes.get('/spots', SpotController.index)
routes.post('/spots',upload.single('thumbnail'), SpotController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes