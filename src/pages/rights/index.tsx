import React from 'react';
import {Layout} from '../../components/layout';
import {Step1} from './step-1';
import {Step2} from './step-2';

export function Rights() {
  const [step, setStep] = React.useState(1);

  function getActiveStep() {
    switch (step) {
      case 2:
        return <Step2 setStep={setStep} />;
      default:
        return <Step1 setStep={setStep} />;
    }
  }

  return (
    <Layout>
      {getActiveStep()}
    </Layout>
  );
}
