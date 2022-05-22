import React from 'react';
import styled, {css} from 'styled-components';

type CheckboxProps = {
  onClick: () => void;
  text: string;
  selected: boolean;
};

export default function Checkbox({
  onClick,
  text,
  selected
}: CheckboxProps) {
  return (
    <CheckboxContainer onClick={onClick}>
      <CheckboxElement selected={selected} />
      <Text>{text}</Text>
    </CheckboxContainer>
  );
}

export const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`;

export const CheckboxElement = styled.div<{
  selected: boolean;
}>`
  height: 30px;
  width: 30px;
  border-radius: .5rem;
  cursor: pointer;
  transition: all 200ms;
  box-shadow: inset 0 0 0 3px #fff;
  border: 2px solid #00f;

  ${props => props.selected
    ? css`
      background-color: #00f;
    ` : css`
      background-color: #fff;

      &:hover {
        background-color: #dedeff;
      }
    `}
  
`;

const CheckboxContainer = styled.div`
  margin: 1.5rem 0 2rem 0;
  display: grid;
  grid-template-columns: 35px 1fr;
  grid-gap: 1rem;
  align-items: center;
`;
