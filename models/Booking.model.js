import mongoose from 'mongoose';
const { Schema } = mongoose;

const bookingSchema = Schema({
	date: { type: Date, required: true, allowNull: false },
	starttime: { type: Date, required: true, allowNull: false },
    bookedByUser: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const EquipmentModel = mongoose.model('booking', bookingSchema)
export default EquipmentModel;