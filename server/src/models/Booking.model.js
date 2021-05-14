import mongoose from 'mongoose'


const BookingSchema = mongoose.Schema(
	
	{
		slot_time: String,
		slot_date: Date
	}, { timestamps: true,  allowNull: false, required: true, lowercase: true, minlength: [5, 'must be longer than 5 characters'],
        maxlength: [20, 'max length exceeded'] },

)

const BookingModel = mongoose.model('slot', BookingSchema)
export default BookingModel