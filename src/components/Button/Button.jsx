import React from 'react';
import './Button.css';

const Button = ({ type = 'primary', className, children, ...props}) => {
  const classNames = `button ${type} ${className && className}`
  return <button className={classNames} {...props}>{children}</button>
};
export default Button;