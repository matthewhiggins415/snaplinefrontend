import styled from 'styled-components';

export const ScreenContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  padding: 40px; 
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  // display: flex;
  // align-items: center;
  // justify-content: center;

  h1 {
    padding: 10px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px; 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  padding: 15px;
  border-radius: 15px;
  margin-top: 3em;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`

export const FormH1 = styled.h1`
  text-align: center;
  font-size: xlarge;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
`

export const FormInput = styled.input`
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  padding: 10px;
  margin-top: 1.5em;
  border: none;
  border-bottom: 2px solid #ECECEC;
  align-items: center;
`


export const FormBtn = styled.button`
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  cursor: pointer;
  padding: 10px;
  transition: 150ms ease-in-out;
  margin-top: 2.5em;
  border-radius: 15px;
  border: none;
  background-color: white;

  &:hover {
    background-color: red;
    color: white;
  }
`
