import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PasswordChangeLink = () => {
  return (
    <p>
      <Link to="/pw-change">Want to change Password?</Link>
    </p>
  )
}

export default PasswordChangeLink;
