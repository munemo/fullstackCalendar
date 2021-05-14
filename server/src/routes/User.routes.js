import UserController from '../controllers/User.controller.js'
import BookingController from '../controllers/Booking.controller.js'

const Routes = (app) => {
	app.get('/user/all', UserController.getAllUsers)
	
}

	export default {Routes}