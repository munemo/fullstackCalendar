import mongoose from 'mongoose'

const UserSchema = mongoose.Schema(
	
	{
		username: String,
		password: String,
		email: String,
		apartment_nr: String,
	}, { timestamps: true, allowNull: false, required: true, lowercase: true, minlength: [5, 'must be longer than 5 characters'],
        maxlength: [20, 'max length exceeded'] },

)

const UserModel = mongoose.model('user', UserSchema)
export default UserModel