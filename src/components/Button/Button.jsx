import React from 'react';
import './Button.scss';

const Button = ({ title, handler }) => {
  return <button onClick={() => handler()}>{title}</button>;
};

export default Button;
