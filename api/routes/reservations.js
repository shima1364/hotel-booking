import express from "express";
import {createReservation, getReservations} from "../controllers/reservation.js";

const router = express.Router();

router.post("/:userId/reservations", createReservation)
router.get("/:userId/reservations", getReservations)

export default router