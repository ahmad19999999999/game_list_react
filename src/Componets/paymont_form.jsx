
import React, { useState } from 'react';

const PaymentForm = ({ gameId, onPaymentSuccess, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

  
    try {
     
      await new Promise((resolve) => setTimeout(resolve, 1000));

      
      onPaymentSuccess(gameId);

    
      onClose();
    } catch (error) {
      console.error('Payment failed:', error);
      
    }
  };

  return (
    <div>
      <h2>Checkout for Game</h2>
      <form onSubmit={handlePaymentSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        <br />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          type="text"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        <br />

        <label htmlFor="cvv">CVV:</label>
        <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          required
        />
        <br />

        <button type="submit">Confirm Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
