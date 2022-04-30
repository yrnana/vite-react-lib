import React from 'react';
import { css } from '@emotion/react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: 'primary' | 'secondary';
}

const buttonStyles = (color: ButtonProps['color']) => css`
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  background: ${color === 'primary' ? '#ff0000' : '#0000ff'};
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`;

const Button = ({ color = 'primary', children, ...props }: ButtonProps) => {
  return (
    <button css={buttonStyles(color)} {...props}>
      {children}
    </button>
  );
};

export default Button;
