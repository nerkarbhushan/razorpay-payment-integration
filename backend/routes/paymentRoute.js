import express from "express";
import { processPayment, getKey } from "../controllers/paymentController";

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/getKey").get(getKey);

export default router;
