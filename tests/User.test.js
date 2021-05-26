import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it as test } from 'mocha'
import StatusCode from '../configuration/StatusCode.js'
import app from '../Server.js'

Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId = '60aba723aef9047c44fcff53'
const dateData = new Date('GMT')

const mockData = {

	email: randomString,
	password: randomString,
	apartment_nr: randomString,
	_id: userId,
}

const testingNonExistentRoute = () => {
	describe('Testing a route that does not exist', () => {
		test('Expecting 404 not found', (done) => {
			Chai.request(app)
				.get(`/${randomString}`)
				.end((request, response) => {
					response.should.have.a.status(StatusCode.NOT_FOUND)
					done()
				})
		})
	})
}

const createUser = () => {
	describe('Testing CREATE(POST) method for user entity', () => {
		test('Expecting a user to be created', (done) => {
			Chai.request(app)
				.post('/user')
				.send(mockData)
				.end((error, response) => {
					response.should.have.a.status(StatusCode.CREATED)
					response.body.should.be.a('object')
					response.body.should.have.property('email').eq(mockData.email)
					response.body.should.have.property('password').eq(mockData.password)
					response.body.should.have.property('apartment_nr').eq(mockData.apartment_nr)
					done()
				})
		})
	})
}

const createSlot = () => {

	const slotData = {

		starttime: randomString,
		date: randomString
		
	}
	describe('Testing CREATE(POST) method for slot entities', () => {
		test('Expecting a slot be created', (done) => {
			Chai.request(app)
				.post('/slot')
				.send(slotData)
				.end((error, response) => {
					response.should.have.a.status(StatusCode.CREATED)
					response.body.should.be.a('object')
					response.body.should.have.property('starttime').eq(slotData.starttime)
					response.body.should.have.property('date').eq(slotData.date)
				
					done()
				})
		})
	})
}

const getAllUsers = () => {
	describe('Fetching all users(GET)', () => {
		test('Expecting to return all the users', (done) => {
			Chai.request(app)
				.get('/user/all')
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					response.body.should.be.a('array')
					response.body.length.should.be.eq(response.body.length)
					done()
				})
		})
	})
}

const updateUser = () => {
	describe('Updating(PUT) a user in the database', () => {
		test('Expecting a user to be updated', (done) => {
			Chai.request(app)
				.put(`/user/update/${userId}`)
				.send(mockData)
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					response.body.should.be.a('object')
			//	response.body.should.have.property('_id').eq(mockData._id)
			//		response.body.should.have.property('email').eq(mockData.email)
			//		response.body.should.have.property('password').eq(mockData.password)
			//	response.body.should.have.property('apartment_nr').eq(mockData.apartment_nr)
					done()
				})
		})
	})
}

const deleteUser = () => {
	describe('Deleting(DELETE) a user in the database', () => {
		test('Expecting a user to be deleted', (done) => {
			Chai.request(app)
				.delete(`/user/${mockData._id}`)
				.end((error, response) => {
					response.should.have.status(StatusCode.OK)
					done()
				})
		})
	})
}

describe('TESTING THE USER_API ROUTE', () => {
	testingNonExistentRoute()
	createUser()
	getAllUsers()
	updateUser()
//	deleteUser()
	createSlot()
})