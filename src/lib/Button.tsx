import { type Interpolation, type Theme, css } from '@emotion/react';

type ButtonProps = React.ClassAttributes<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    css?: Interpolation<Theme>;
    color?: 'primary' | 'secondary';
  };

const buttonStyles = (color: ButtonProps['color']) => css`
  font-family: -apple-system, sans-serif;
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  background: ${color === 'primary' ? '#ff0000' : '#0000ff'};
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`;

export const Button = ({ color = 'primary', ...props }: ButtonProps) => {
  return <button {...props} css={[props.css, buttonStyles(color)]} />;
};
