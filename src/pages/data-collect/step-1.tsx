import React from 'react';
import {Col, Row} from 'react-grid-system';
import styled from 'styled-components';
import {IStep1Props} from '../../@types/types';
import {Button} from '../../components/button';
import {ImageCol} from '../../components/image-col';
import {List} from '../../components/list';
import {Paragraph} from '../../components/paragraph';
import {Subtitle} from '../../components/sub-title';
import {Title} from '../../components/title';
import {TopicTitle} from '../../components/topic-title';
import CollectImage from '../../images/collect.svg';

export function Step1({setStep}: IStep1Props) {
  return (
    <>
      <Row>
        <ImageCol image={CollectImage} />
        <Col lg={6}>
          <Title>
            Coleta de dados
          </Title>

          <Subtitle>
            O que coletamos
          </Subtitle>
          <Paragraph>
            Para que você possa desfrutar da experiência de utilizar nossa
            plataforma, recolhemos alguns de seus dados pessoais,
            dados bancários, dados de seu dispositivo e informações de crédito no mercado.
            Abaixo, discriminaremos cada um dos dados coletados:
          </Paragraph>

          <Row>
            <Col md={6}>
              <TopicTitle>
                Dados pessoais <br /> e bancários
              </TopicTitle>
              <List>
                <li>Nome completo</li>
                <li>Imagem pessoal ou do documento</li>
                <li>Número do documento</li>
                <li>Dados bancários e de pagamento</li>
                <li>Informações de contato</li>
                <li>Endereço</li>
                <li>Atividades na plataforma</li>
              </List>
            </Col>

            <Col md={6}>
              <TopicTitle>
                Dados do <br /> dispositivo
              </TopicTitle>
              <List>
                <li>Navegador</li>
                <li>Sistema operacional</li>
                <li>Configurações do sistema</li>
                <li>Dados biométricos</li>
                <li>Endereço IP</li>
                <li>Geolocalização</li>
                <li>Listas de contatos</li>
              </List>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <Subtitle>
            Finalidade
          </Subtitle>
          <Paragraph>
            Para fornecer e aprimorar nossos serviços, as plataformas do Mercado
            Livre fazem as coletas dos dados, mas, além disso, precisamos cumprir
            nossas obrigações com as autoridades de proteção de dados, detectar e
            prevenir fraudes, realizar anúncios e por fim, proteger os seus direitos.
          </Paragraph>
        </Col>

        <Col md={6}>
        <Subtitle>
            Prazo de retenção
          </Subtitle>
          <Paragraph>
            Os dados pessoais serão armazenados somente durante o tempo em que 
            for necessário para cumprir a finalidade em que foram coletadas 
            ou por um período máximo de 6 meses após o fim de sua finalidade. 
            Após tal período os dados serão anonimizados.
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
