import mongoose from 'mongoose';
const { Schema } = mongoose;

const SlotSchema = Schema({
    starttime: { type: String, required: true, allowNull: false},
   
    bookedByUser: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

const SlotModel = mongoose.model('slot', SlotSchema)
export default SlotModel;
