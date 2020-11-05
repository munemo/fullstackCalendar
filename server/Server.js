import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import mongoose from 'mongoose'
import middlewares from './src/middlewares/Middlewares.js'

dotenv.config()
const app = express()
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
	res.send('Pancakes!')
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

mongoose.connect('mongodb://localhost/arastotutorialdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to the database!'))
	.catch((error) => {
		console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
		process.exit()
	})

app.listen(port, () => {
	console.log(`Servern är igång på port ${port}`)
})