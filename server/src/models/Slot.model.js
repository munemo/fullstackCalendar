import mongoose from 'mongoose';
const { Schema } = mongoose;

const SlotSchema = Schema({
    starttime: { type: String, required: true, allowNull: false},
    date: { type: Date, required: true, allowNull: false},
   
    bookedByUser: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps: true})

const SlotModel = mongoose.model('slot', SlotSchema)
export default SlotModel;
