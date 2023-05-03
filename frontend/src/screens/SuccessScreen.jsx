import React from 'react'
import { Link } from 'react-router-dom'

const SuccessScreen = () => {

  return (
    <div>
    <h2>Thanks for your order!</h2>
    <p>Your order might take some time to process.</p>
    <p>Check your order status at your profile after about 10mins.</p>
    <p>
      Incase of any inqueries contact the support at{" "}
      <strong>support@shoptech.com</strong>
    </p>
    <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default SuccessScreen;