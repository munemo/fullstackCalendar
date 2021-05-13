import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { PORT, DEV_DATABASE_URL,
    PROD_DATABASE_URL,
    ENVIRONMENT } = process.env

const connectToPort = async (app) => {
	try {
		await app.listen(PORT, () => {
			console.log(`✔️ SERVER RUNNING ON ${PORT}`);
		})
	} catch (error) {
		console.error(`❌  ERROR OCCURED WHILE CONNECTING TO ${PORT}`)
	}
}

const connectToDatabase = async () => {
	const DATABASE_URL = ENVIRONMENT === 'DEVELOPMENT' ? DEV_DATABASE_URL : PROD_DATABASE_URL
	try {
		await mongoose.connect(`${DATABASE_URL}`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true
			})
		console.log(`✔️ CONNECTED TO DATABASE`);

	} catch (error) {
		console.error(`❌  ERROR OCCURED WHILE CONNECTING TO DATABASE`)
		process.exit()
	}
}

export default {
	connectToDatabase,
	connectToPort
}