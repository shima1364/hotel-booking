import mongoose from "mongoose";
const { Schema} = mongoose;


const ReservationSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hotel',
      required: true
    },
    checkInDate: {
      type: Date,
      required: true
    },
    checkOutDate: {
      type: Date,
      required: true
    },
    numberOfRooms: {
      type: Number,
      required: true
    },
    hotelName: {
      type: String,
      required: true
    }
  });
  export default mongoose.model("Resevation", ReservationSchema)
  