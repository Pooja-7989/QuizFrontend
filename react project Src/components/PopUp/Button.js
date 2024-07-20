import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button type="button" class="btn btn-warning" style={{padding:'0'}} onClick={onClick}>Upgrade Now</button>
  );
}

export default Button;