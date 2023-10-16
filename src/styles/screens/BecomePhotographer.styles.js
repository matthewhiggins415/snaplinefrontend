import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 40px; 
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;

  h1 {
    padding: 10px;
  }
`
export const Instructions = styled.div`
  margin: 3em auto;
  min-height: 100%;
  padding: 15px; 
  border-radius: 15px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  div {
    margin: 20px auto;
  }
`

export const ThingsYouNeedContainer = styled.div`
  margin-top: 20px;
`

export const GetStarted = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #F5F5F5;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: lightgray;
  }
`