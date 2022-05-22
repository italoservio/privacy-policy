import React from 'react';
import {Col, Row} from 'react-grid-system';
import styled from 'styled-components';
import {Button} from '../../components/button';
import Checkbox from '../../components/checkbox';
import {ImageCol} from '../../components/image-col';
import {Layout} from '../../components/layout';
import {Paragraph} from '../../components/paragraph';
import {Title} from '../../components/title';
import useCoordinator from '../../hooks/use-coordinator';
import PartyImage from '../../images/party.svg';

const CenteredCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Finish() {
  const [selected, setSelected] = React.useState(false);
  const {goToStart} = useCoordinator();

  return (
    <Layout>
      <Row>
        <ImageCol image={PartyImage} />
        <CenteredCol lg={5}>
          <div>
            <Title>
              Parabéns!
            </Title>
            <Paragraph>
            Você entendeu nossos termos e está pronto para começar a utilizar 
            nossa aplicação! <br />
            Mas... antes de começar, que tal melhorar a sua experiência fornecendo
            dados adicionais de sua navegação?
            </Paragraph>

            <Checkbox
              onClick={() => setSelected(prev => !prev)}
              selected={selected}
              text={`Desejo fornecer dados de navegação para 
                melhorar a experiência na plataforma.`
              }
            />

            <div>
              <Button onClick={goToStart}>Começar</Button>
            </div>
          </div>
        </CenteredCol>
      </Row>
    </Layout>
  );
}
