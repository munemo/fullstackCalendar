import UserController from '../controllers/User.controller.js'
import SlotsController from '../controllers/Slot.controller.js'

const Routes = (app) => {
	app.post('/user', UserController.createUser)
	app.get('/user/all', UserController.getAllUsers)
	app.get('/user/find/:userId', UserController.getUserWithId)
	app.get('/user/query', UserController.getUserWithUsernameQuery)
	app.put('/user/update/:userId', UserController.updateUser)
	app.delete('/user/:userId', UserController.deleteUser)
	app.post('/slot', SlotsController.createSlot)
	app.get('/slots/all', SlotsController.getAllSlots)

}

	export default {Routes}