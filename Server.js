import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import middlewares from './middlewares/Middlewares.js'
import Configuration from './configuration/Configuration.js'
import UserRoutes from './routes/User.routes.js'
import { config } from 'dotenv'

const app = express()
app.use(helmet())
app.use(express.json())
app.use(cors({credential: true}))
app.use(morgan('common'))
app.use(helmet())

UserRoutes.Routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)
app.use(express.static(("cd frontend/build")))

export default app