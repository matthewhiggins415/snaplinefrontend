import React from 'react';

import { Container, ProgressBarStepOne, ProgressBarStepTwo, ProgressBarStepThree } from '../../styles/components/UploadProgress.styles';

const UploadProgressBar = ({ stepOne, stepTwo, stepThree}) => {
  return (
    <Container>
      <ProgressBarStepOne stepOne={stepOne}>
        <p>1</p>
        <p>create album</p>
      </ProgressBarStepOne>
      <ProgressBarStepTwo stepTwo={stepTwo}>
        <p>2</p>
        <p>upload photos</p>
      </ProgressBarStepTwo>
      <ProgressBarStepThree stepThree={stepThree}>
        <p>3</p>
        <p>price photos</p>
      </ProgressBarStepThree>
    </Container>
  )
}

export default UploadProgressBar