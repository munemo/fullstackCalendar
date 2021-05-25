import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = Schema({
   
    email: { type: String, required: true, allowNull: false },
   
    apartment_nr: { type: String, required: true, allowNull: false },

    password: { type: String, required: true, allowNull: false , minlength: [5, 'password must be longer than 5 characters'] },

    bookedTime: [{
        type: Schema.Types.ObjectId,
        ref: 'slot'
    }]

}, { timestamps: true })

const UserModel = mongoose.model('user', userSchema)
export default UserModel;