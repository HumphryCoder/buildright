import React from 'react';
import classNames from 'classnames';

const Button = ({
  text = 'Button',
  size = 'medium',
  width, // Add width to the props
  height, // Add height to the props
  color,
  bgColor,
  fontColor,
  onClick,
}) => {
  const fontMapping = {
    small: '16px',
    medium: '20px',
    large: '24px',
  };

  const sizeMapping = {
    small: { width: '100px', height: '35px' },
    medium: { width: '130px', height: '40px' },
    large: { width: '150px', height: '60px' },
  };

  const buttonStyle = {
    width: width || sizeMapping[size].width,
    height: height || sizeMapping[size].height,
    fontSize: fontMapping[size] || size,
    backgroundColor: bgColor || color || '#3E71F3',
    color: fontColor || '#F4F4F6',
    border: 'none',
    borderRadius: "15px",
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
