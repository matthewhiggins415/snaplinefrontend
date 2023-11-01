import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 100px auto;
  padding: 25px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
  }
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 15px;
  border: 1px solid black;
  width: 220px;
  outline: none;
`

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 25px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: #F5F5F5;
  transition: 150ms ease-in-out;

  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;

  &:hover {
    background-color: lightgray;
  }
`