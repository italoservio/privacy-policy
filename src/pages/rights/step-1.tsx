import React from 'react';
import {Col, Row} from 'react-grid-system';
import styled from 'styled-components';
import {IStep1Props} from '../../@types/types';
import {Button} from '../../components/button';
import {ImageCol} from '../../components/image-col';
import {Paragraph} from '../../components/paragraph';
import {Subtitle} from '../../components/sub-title';
import {Title} from '../../components/title';
import {TopicTitle} from '../../components/topic-title';
import RightsImage from '../../images/rights.svg';

export function Step1({setStep}: IStep1Props) {
  return (
    <>
      <Row>
        <ImageCol image={RightsImage} />
        <Col lg={6}>
          <Title>
            Direitos
          </Title>

          <Subtitle>
            Base jurídica
          </Subtitle>

          <TopicTitle>Consentimento</TopicTitle>
          <Paragraph>
            Essa base é necessária pois precisamos do seu consentimento para enviar,
            através dos meios de contato informados no seu cadastro, informações sobre
            marketing e ofertas.
            Exibir conteúdos que possam estar relacionados ao seu interesse,
            através da análise dos seus últimos interesses e compras.
            Observação: para retirar estas opções, basta acessar a plataforma ou
            entrar em contato com o setor de cliente solicitando a
            remoção do consentimento.
          </Paragraph>

          <TopicTitle>Execução do Contrato</TopicTitle>
          <Paragraph>
            Essa base é necessária para executar os processos necessários que
            envolvem a atividade fim da organização. Seus dados de contato,
            endereço, pessoais serão compartilhados com os nossos fornecedores
            e parceiros para que seja possível executar o processo de suas compras.
          </Paragraph>
        </Col>

        <Col md={6}>

        </Col>

        <Col md={6}>
          <Subtitle>
            Decisões automatizadas
          </Subtitle>
          <Paragraph>
            Nossos serviços podem realizar algumas decisões automatizadas que
            sejam necessárias para a execução do do serviço. Desta forma, você
            tem o direito de escolher se confirmará as decisões ou se
            optará por recusá-las no momento da operação.
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
