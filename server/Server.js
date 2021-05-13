import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import middlewares from './src/middlewares/Middlewares.js'
import Configuration from './configuration/Configuration.js'
import UserRoutes from './src/routes/User.routes.js'

const app = express()
app.use(helmet())
app.use(express.json())
app.use(cors({credential: true}))
app.use(morgan('common'))
app.use(helmet())

app.get('/recipe', (req, res) => {
	res.send('Pancakes!')
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app