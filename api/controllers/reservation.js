import Reservation from "../models/Reservation.js";
import Hotel from "../models/Hotel.js";
import User from "../models/User.js";


// Create a new reservation for a user
export const createReservation= async (req, res,next) => {
    try {
      const { userId } = req.params;
      const { hotelId, checkInDate, checkOutDate, numberOfRooms } = req.body;
  
      // Check if the user exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Check if the hotel exists
      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
        return res.status(404).send('Hotel not found');
      }
  
      // Create a new reservation
      const reservation = new Reservation({
        user: userId,
        hotel: hotelId,
        checkInDate,
        checkOutDate,
        numberOfRooms,
      });
  
      await reservation.save();
  
      res.status(201).send(reservation);
    } catch (err) {
      next(err);
    }
  };
  