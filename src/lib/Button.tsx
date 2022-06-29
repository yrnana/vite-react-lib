import styled from 'styled-components';

type ButtonProps = {
  color?: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>`
  font-family: -apple-system, sans-serif;
  cursor: pointer;
  padding: 10px 20px;
  color: #fff;
  background: ${(props) =>
    props.color === 'secondary' ? '#0000ff' : '#ff0000'};
  border: 0;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
`;
