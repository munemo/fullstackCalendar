import BookingModel from '../models/Booking.model.js'
import StatusCode from '../../configuration/StatusCode.js'


    const createBooking = async (req, res) => {
      const appointment = new BookingModel({
        slot_time: req.body.slot_time,
        slot_date: req.body.slot_date
      })
    
      try {
        const response = await appointment.save()
        res.status(StatusCode.CREATED).send(response)
      } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({ message: error.message })
      }
    }


    export default {createBooking}