import express from "express";
import {createReservation} from "../controllers/reservation.js";

const router = express.Router();

router.post("/:userId/reservations", createReservation)

export default router