import React from 'react';

export type IAnswer = {
  key: number;
  order: number;
  text: string;
  correct: boolean;
};

export type IQuestion = {
  text: string;
  answers: IAnswer[];
};

export type IStep1Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export type IStep2Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
