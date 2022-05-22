import React from 'react';
import {Col, Row} from 'react-grid-system';
import styled from 'styled-components';
import {IAnswer, IQuestion, IStep2Props} from '../../@types/types';
import {Answer} from '../../components/answer';
import {Button} from '../../components/button';
import {ImageCol} from '../../components/image-col';
import {Subtitle} from '../../components/sub-title';
import {Title} from '../../components/title';
import useCoordinator from '../../hooks/use-coordinator';
import OptionsImage from '../../images/options.svg';

export function Step2({setStep}: IStep2Props) {
  const [questions, setQuestions] = React.useState([] as IQuestion[]);
  const [question, setQuestion] = React.useState({} as IQuestion);
  const [answer, setAnswer] = React.useState({} as IAnswer);
  const [showResult, setShowResult] = React.useState(false);
  const {goToFinish} = useCoordinator();

  React.useEffect(() => {
    setQuestions([
      {
        text: 'Como devo agir a respeito de decisões automatizadas',
        answers: [
          {
            key: 1,
            order: getRandomInt(0, 101),
            text: 'Não deve agir, pois elas são automatizadas.',
            correct: false
          },
          {
            key: 2,
            order: getRandomInt(0, 101),
            text: 'Devo agir e a única alternativa é aceitá-las.',
            correct: false
          },
          {
            key: 3,
            order: getRandomInt(0, 101),
            text: 'Posso avaliar as decisões e decidir se vou aceitá-las ou não.',
            correct: true
          }
        ]
      },
      {
        text: 'Não desejo mais consentir com o recebimento de e-mail marketing, o que faço?',
        answers: [
          {
            key: 1,
            order: getRandomInt(0, 101),
            text: 'Devo bloquear o recebimento no meu provedor de e-mail.',
            correct: false
          },
          {
            key: 2,
            order: getRandomInt(0, 101),
            text: 'Não há o que fazer, a não ser que remova seu cadastro da plataforma.',
            correct: false
          },
          {
            key: 3,
            order: getRandomInt(0, 101),
            text: 'Posso acessar a plataforma e solicitar a remoção do consentimento.',
            correct: true
          }
        ]
      }
    ] as IQuestion[]);
  }, []);

  React.useEffect(() => {
    const q = questions[getRandomInt(0, 2)];
    if (!!questions.length) setQuestion(q);
  }, [questions]);

  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <>
      <Row>
        <ImageCol image={OptionsImage} lg={6} />
        <Col lg={5}>
          <Title>
            Proteção de dados
          </Title>

          {question && !!Object.keys(question).length && (
            <>
              <Subtitle>
                {question.text}
              </Subtitle>

              <div style={{display: 'flex', flexDirection: 'column'}}>
                {question.answers
                  .sort(
                    (a, b) => a.order < b.order ? -1 : a.order > b.order ? 1 : 0
                  )
                  .map(a => (
                    <Answer
                      key={a.key}
                      componentAnswer={a}
                      selectedAnswer={answer}
                      showResult={showResult}
                      onClick={() => setAnswer(a)}
                    />
                  ))
                }
              </div>
            </>
          )}

          <ButtonContainer>
            {!showResult ? (
              <Button
                disabled={!answer || !!!Object.keys(answer).length}
                onClick={() => setShowResult(true)}
              >
                Responder
              </Button>
            ) : answer.correct ? (
              <Button onClick={() => goToFinish()}>
                Avançar
              </Button>
            ) : (
              <Button onClick={() => setStep(1)}>
                Voltar
              </Button>
            )}
          </ButtonContainer>
        </Col>
      </Row>
    </>
  );
}

const ButtonContainer = styled.div`
  margin-top: 2rem;
`;
