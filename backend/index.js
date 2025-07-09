import express from "express";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import paymentRoute from "./routes/productsRoute.js";

const app = express();
dotenv.config({ path: "../backend/.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET_KEY,
});

instance.orders.all().then(console.log).catch(console.error);

app.use("/api/v1", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT - ${PORT}`);
});
