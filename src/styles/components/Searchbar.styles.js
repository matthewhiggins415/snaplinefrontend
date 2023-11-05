import styled from 'styled-components';

export const SearchContainer = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 50px;
  border: 1px solid red;
  border-radius: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 950px) {
    width: 600px;
  }
`

export const Input = styled.input`
  width: 80%;
  height: 45px;
  padding-left: 20px;
  border: none;
  outline: none;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const Btn = styled.button`
  width: 20%;
  color: white;
  height: 50px;
  background-color: red;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  border: none;
  outline: none;
  cursor: pointer;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

`