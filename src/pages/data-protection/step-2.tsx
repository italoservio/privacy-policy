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
import ExamImage from '../../images/exam.svg';

export function Step2({setStep}: IStep2Props) {
  const [questions, setQuestions] = React.useState([] as IQuestion[]);
  const [question, setQuestion] = React.useState({} as IQuestion);
  const [answer, setAnswer] = React.useState({} as IAnswer);
  const [showResult, setShowResult] = React.useState(false);
  const {goToRights} = useCoordinator();

  React.useEffect(() => {
    setQuestions([
      {
        text: 'Qual setor devo procurar quando há problemas com meus dados?',
        answers: [
          {
            key: 1,
            order: getRandomInt(0, 101),
            text: 'O setor responsável pelo serviço que estou consumindo.',
            correct: false
          },
          {
            key: 2,
            order: getRandomInt(0, 101),
            text: 'O SAC ou a loja responsável pela transação.',
            correct: false
          },
          {
            key: 3,
            order: getRandomInt(0, 101),
            text: 'O setor responsável pelo tratamento e proteção dos dados.',
            correct: true
          }
        ]
      },
      {
        text: 'Como o mercado livre lida com os dados de menores?',
        answers: [
          {
            key: 1,
            order: getRandomInt(0, 101),
            text: 'Dados são dados e todos são tratados indistinguivelmente.',
            correct: false
          },
          {
            key: 2,
            order: getRandomInt(0, 101),
            text: 'Menores podem informar seus dados por conta própria e acessar as plataformas.',
            correct: false
          },
          {
            key: 3,
            order: getRandomInt(0, 101),
            text: 'Dados de menores devem ser consentidos por um responsável legal.',
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
        <ImageCol image={ExamImage} lg={6} />
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
              <Button onClick={() => goToRights()}>
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
