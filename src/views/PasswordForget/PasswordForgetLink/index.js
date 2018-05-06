import React from 'react';
import { Link } from 'react-router-dom';

const PasswordForgetLink = () => {
  return (
    <p>
      <Link to="/pw-forget">Forgot Password?</Link>
    </p>
  )
}

export default PasswordForgetLink;
