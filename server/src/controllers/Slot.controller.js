import SlotModel from '../models/Slot.model.js'
import StatusCode from '../../configuration/StatusCode.js'


const createSlot = async (req, res) => {
	const user = new SlotModel({
		starttime: req.body.starttime,
	})

	try {
		const response = await user.save()
		res.status(StatusCode.CREATED).send(response)
	} catch (error) {
		res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
	}
}



export default { createSlot }