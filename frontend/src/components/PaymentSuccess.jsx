import React from "react";
import "../styles/PaymentSuccess.css";
import { useLocation } from "react-router-dom";

function PaymentSuccess() {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");
  return (
    <>
      <div className="payment-success-container">
        <div className="payment-success-card">
          <h1 className="payment-success-title">Payment successful..!! </h1>
          <p className="payment-success-message">
            Thanks for payment. Your transaction was successfull!
          </p>
          {reference && (
            <p className="payment-success-reference">
              <strong>Reference ID -</strong> {reference}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default PaymentSuccess;
