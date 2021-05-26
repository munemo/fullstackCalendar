import UserModel from '../models/User.model.js'
import StatusCode from '../configuration/StatusCode.js'

const createUser = async (req, res) => {
	const user = new UserModel({
		email: req.body.email,
		password: req.body.password,
		apartment_nr: req.body.apartment_nr
	})

	try {
		const response = await user.save()
		res.status(StatusCode.CREATED).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getAllUsers = async (req, res) => {
	try {
		const response = await UserModel.find()
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}

const getUserWithId = async (req, res) => {
	try {
		const response = await UserModel.findById(req.params.userId)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to retrieve user with ID: ' + req.params.userId,
			error: error.message
		})
	}
}

const getUserWithUsernameQuery = async (req, res) => {
	try {
		const response = await UserModel.find({ email: req.query.email })
		response.length !== 0
			? res.status(StatusCode.OK).send(response)
			: res.status(StatusCode.NOT_FOUND).send({ message: 'Could not find user with username ' + req.query.username })

	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to retrieve user with username: ' + req.query.userId,
			error: error.message
		})
	}
}

const updateUser = async (req, res) => {
	try {
		if (!req.body) { return res.status(StatusCode.BAD_REQUEST).send({ message: 'cannot update empty values' }) }
		const response = await UserModel.findByIdAndUpdate(req.params.userId, {
			email: req.body.email,
			password: req.body.password,
			apartment_nr: req.body.apartment_nr
		},)
		res.status(StatusCode.OK).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to update values of the user with ID: ' + req.params.userId,
			error: error.message
		})
	}
}

const deleteUser = async (req, res) => {
	try {
		const response = await UserModel.findByIdAndDelete(req.params.userId)
		res.status(StatusCode.OK).send({
			message: `Sucessfully deleted the USER with username: ${response.email} and ID: ${req.params.userId}`
		})
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
			message: 'Error occured while trying to delete user with the ID: ' + req.params.userId,
			error: error.message
		})
	}
}

export default {
	createUser,
	getAllUsers,
	getUserWithId,
	getUserWithUsernameQuery,
	updateUser,
	deleteUser
}