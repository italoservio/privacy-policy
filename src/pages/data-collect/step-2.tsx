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
import SearchImage from '../../images/search.svg';

export function Step2({setStep}: IStep2Props) {
  const [questions, setQuestions] = React.useState([] as IQuestion[]);
  const [question, setQuestion] = React.useState({} as IQuestion);
  const [answer, setAnswer] = React.useState({} as IAnswer);
  const [showResult, setShowResult] = React.useState(false);
  const {goToDataProtection} = useCoordinator();

  React.useEffect(() => {
    setQuestions([
      {
        text: 'Qual o período que podemos reter seus dados após o término da finalidade?',
        answers: [
          {
            key: 1,
            order: getRandomInt(0, 101),
            text: 'Pode ser retido por no máximo 1 ano.',
            correct: false
          },
          {
            key: 2,
            order: getRandomInt(0, 101),
            text: 'Deve ser apagado imediatamente após o término.',
            correct: false
          },
          {
            key: 3,
            order: getRandomInt(0, 101),
            text: 'Pode ser retido por no máximo 6 meses.',
            correct: true
          }
        ]
      },
      {
        text: 'Quais são as categorias dos dados que coletamos?',
        answers: [
          {
            key: 1,
            order: getRandomInt(0, 101),
            text: 'Dados pessoais e bancários, apenas.',
            correct: false
          },
          {
            key: 2,
            order: getRandomInt(0, 101),
            text: 'Dados de hardware e pessoais.',
            correct: false
          },
          {
            key: 3,
            order: getRandomInt(0, 101),
            text: 'Dados pessoais, bancários e do dispositivo.',
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
        <ImageCol image={SearchImage} lg={6} />
        <Col lg={5}>
          <Title>
            Coleta de dados
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
              <Button onClick={() => goToDataProtection()}>
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
