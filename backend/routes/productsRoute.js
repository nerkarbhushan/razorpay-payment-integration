import express from "express";
import {
  processPayment,
  getKey,
  paymentVerification,
} from "../controllers/productsController";

const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/getKey").get(getKey);
router.route("/payementVerification").post(paymentVerification);

export default router;
