import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchContainer = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Form = styled.div`
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

export const ResultContainer = styled.div`
  top: 150px;
  position: fixed;
  border-radius: 10px;
  width: 400px;  
  height: auto;
  display: flex;
  flex-direction: column;
  z-index: 20;
  background-color: white;
  border: 2px solid #ececec;

  &:empty {
    display: none;
  }

  @media (min-width: 950px) {
    width: 600px;
  }
` 

export const ResultLink = styled(Link)`
  padding: 10px;
  outline: none;
  color: black;
  text-decoration: none;
  cursor: pointer;
  transition: 150ms ease-in-out;
  border-radius: 8px;

  &:empty {
    display: none;
  }

  &:hover {
    background-color: #ececec;
  }
`