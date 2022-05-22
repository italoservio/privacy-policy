import React from 'react';
import {Col as DefaultCol} from 'react-grid-system';
import styled from 'styled-components';

const Col = styled(DefaultCol)`
  display: flex;
  justify-content: center;
`;

export function ImageCol({image, ...rest}: {image: string; [key: string]: any}) {
  return (
    <Col {...rest}>
      <img src={image} width={'90%'} />
    </Col>
  );
}
