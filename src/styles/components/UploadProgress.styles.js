import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ProgressBarStepOne = styled.div`
  color: ${(props) => (props.stepOne === true ? "red" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProgressBarStepTwo = styled.div`
  color: ${(props) => (props.stepTwo === true ? "red" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProgressBarStepThree = styled.div`
  color: ${(props) => (props.stepThree === true ? "red" : "black")};
  display: flex;
  flex-direction: column;
  align-items: center;
`