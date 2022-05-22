import React from 'react';
import {Col, Row} from 'react-grid-system';
import styled from 'styled-components';
import {Button} from '../../components/button';
import {ImageCol} from '../../components/image-col';
import {Layout} from '../../components/layout';
import {Paragraph} from '../../components/paragraph';
import {Title} from '../../components/title';
import useCoordinator from '../../hooks/use-coordinator';
import QuestionImage from '../../images/question.svg';

const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Start() {
  const {goToDataCollect} = useCoordinator();

  return (
    <Layout>
      <Row>
        <ImageCol image={QuestionImage} />
        <CenteredCol lg={5}>
          <div>
            <Title>
              Política de <br />
              Privacidade
            </Title>
            <Paragraph>
              Para continuar a utilizar a aplicação, lhe
              apresentaremos nossa política de privacidade e,
              logo em seguida, um quiz para demonstrar
              que entendeu e está de acordo com nossos termos.
            </Paragraph>
            <div>
              <Button onClick={goToDataCollect}>Avançar</Button>
            </div>
          </div>
        </CenteredCol>
      </Row>
    </Layout>
  );
}
