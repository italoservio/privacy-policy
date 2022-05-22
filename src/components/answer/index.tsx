import React from 'react';
import styled, {css} from 'styled-components';
import {IAnswer} from '../../@types/types';
import Check from '../../images/check.svg';
import Cross from '../../images/cross.svg';

type AnswerProps = {
  componentAnswer: IAnswer;
  selectedAnswer: IAnswer;
  showResult: boolean;
  onClick: () => void;
};

export function Answer({
  componentAnswer,
  selectedAnswer,
  showResult,
  onClick
}: AnswerProps) {

  function getImage() {
    if (componentAnswer.key === selectedAnswer.key) {
      return componentAnswer.correct
        ? <Icon src={Check} alt={'Correct'} />
        : <Icon src={Cross} alt={'Incorrect'} />;
    }
    return <></>;
  }

  return (
    <Box
      onClick={() => !showResult && onClick()}
      showResult={showResult}
      componentAnswer={componentAnswer}
      selectedAnswer={selectedAnswer}
      correct={componentAnswer.correct}
    >
      {showResult && componentAnswer.key === selectedAnswer.key
        ? getImage()
        : (
          <Circle
            checked={
              !!Object.keys(selectedAnswer).length &&
              componentAnswer.key === selectedAnswer.key
            }
          />
        )}
      <Text>{componentAnswer.text}</Text>
    </Box>
  );
}

const Icon = styled.img`
  width: 25px;
  margin-right: 1rem;
`;

const Box = styled.div<{
  showResult: boolean;
  correct: boolean;
  componentAnswer: IAnswer;
  selectedAnswer: IAnswer;
}>`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 25px 1fr;
  align-items: center;  
  border-radius: .75rem;
  padding: 1.5rem 1rem;
  margin-top: 1rem;
  
  transition: all 200ms;  
    
  ${props => props.showResult
    && props.componentAnswer.key === props.selectedAnswer.key
    ? (props.correct
      ? css`
          background-color: #b5e5b5;
          border: 2px solid #71ab63;
          cursor: not-allowed;`
      : css`
        background-color: #e5b5b5;
        border: 2px solid #ad6f6f;
        cursor: not-allowed;`
    ) : (
      css`
      background-color: #eee;
      border: 2px solid #333;

      ${props.showResult
          ? css`
          cursor: not-allowed;
        ` : css`
          cursor: pointer;
          &:hover {
            background-color: #ddd;
          }
        `}
    `
    )}
`;

const Circle = styled.div<{checked: boolean;}>`
  height: 22px;
  width: 22px;  
  border-radius: 50%;
  border: 2px solid #00f;
  box-shadow: inset 0 0 0 3px #fff;
  transition: all 200ms;

  ${props => props.checked
    ? css`background-color: #00f;`
    : css`background-color: #fff;`
  }
`;

const Text = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`;
