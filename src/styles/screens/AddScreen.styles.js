import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 0 auto;

  h1 {
    margin-bottom: 30px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const UploadLink = styled(Link)`
  padding: 15px 40px;
  margin-top: 15px;
  color: black;
  text-decoration: none;
  cursor: pointer;
  min-width: 350px;
  text-align: center;
  transition: 150ms ease-in-out;
  border-radius: 30px;
  background-color: #F5F5F5;

  &:hover {
    background-color: lightgray;
  }
`