import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Mitr', sans-serif;
  font-size: 1.25rem;
  color: #fff;
  background-color: #0000ff;
  border-radius: .5rem;
  padding: .75rem 2.25rem;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: #0000c9;
  }

  &:disabled {
    background-color: #5757d0;
    cursor: not-allowed;
  }
`;
