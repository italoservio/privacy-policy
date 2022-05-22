import React from 'react';
import {Col, Row} from 'react-grid-system';
import styled from 'styled-components';
import {IStep1Props} from '../../@types/types';
import {Button} from '../../components/button';
import {ImageCol} from '../../components/image-col';
import {Paragraph} from '../../components/paragraph';
import {Subtitle} from '../../components/sub-title';
import {Title} from '../../components/title';
import ProtectionImage from '../../images/protection.svg';

export function Step1({setStep}: IStep1Props) {
  return (
    <>
      <Row>
        <ImageCol image={ProtectionImage} />
        <Col lg={6}>
          <Title>
            Proteção de dados
          </Title>

          <Subtitle>
            Quem é o responsável
          </Subtitle>
          <Paragraph>
            É sempre bom sabermos a quem recorrer em um caso relacionado aos
            nossos dados pessoais, aqui está o telefone para contato do setor
            responsável pelo tratamento e proteção dos dados de nossa instituição:
            <br />
            <br />
            <b>MERCADOLIVRE.COM ATIVIDADES DE INTERNET LTDA</b><br />
            <b>03.361.252/0001-34</b><br />
            <b>(11) 2543-4155 / (11) 5505-3990</b>
          </Paragraph>
        </Col>

        <Col md={6}>
          <Subtitle>
            Proteção para menores
          </Subtitle>
          <Paragraph>
            Nossos serviços podem estar disponíveis para os menores de idade, 
            mediante consentimento prévio do representante legal. Se você está
            incluído nessa categoria e não possui o consentimento do seu 
            representante, não deverá fornecer sua informação pessoal.
          </Paragraph>
        </Col>

        <Col md={6}>
        <Subtitle>
            Internacionalidade
          </Subtitle>
          <Paragraph>
            Nossos serviços requerem o suporte de uma infraestrutura tecnológica, 
            podendo ser servidores próprios ou terceirizados. Dessa forma, 
            servidores esses podem estar localizados em outros países. 
            Por isso nos resguardamos por contratos que impõem as mesmas medidas 
            de proteção descritas em nossa declaração de privacidade.
          </Paragraph>
        </Col>
      </Row>

      <ButtonContainer>
        <Button onClick={() => setStep(2)}>
          Avançar
        </Button>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
