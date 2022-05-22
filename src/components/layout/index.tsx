import React from 'react';
import {Container} from 'react-grid-system';
import styled from 'styled-components';

export const Centered = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6rem);

  & > div {
    width: 100%;
  }
`;

export function Layout({children}: {children: React.ReactNode;}) {
  return (
    <Container>
      <Centered>
        {children}
      </Centered>
    </Container>
  );
}
