import React from "react";
import "../styles/Products.css";
import axios from "axios";

function Product({ products }) {
  const checkoutHandler = async (amount) => {
    const { data: keyData } = await axios.get("/api/v1/getKey");
    console.log(keyData);
    const { key } = keyData;
    const { data: orderData } = await axios.post("/api/v1/payment/process", {
      amount,
    });
    const { order } = orderData;
    console.log(order);

    // Open Razorpay Checkout
    const options = {
      key,
      amount,
      currency: "INR",
      name: "Nerkar B",
      description: "Razorpay",
      order_id: order.id,
      callback_url: "/api/v1/paymentVerification",
      prefill: {
        name: "Bhushan Nerkar",
        email: "bhushan@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <div className="products-container">
        {products.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              <img className="product-image" src={item.image} alt="Product" />
              <h3 className="product-title">{item.title}</h3>{" "}
              <p className="product-price">
                Price <strong>{item.price}</strong>/-
              </p>
              <button
                className="pay-button"
                onClick={() => checkoutHandler(item.price)}
              >
                Pay
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
