import styled from 'styled-components';

export const ScreenContainer = styled.div`
  max-width: 100%;
  min-height: 90vh;
  padding: 40px; 
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;

  h1 {
    padding: 10px;
  }
`

export const UserContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`

export const UserInfo = styled.div`
  margin: 30px auto;
`

export const UserImg = styled.img`
  
`

export const ChangeImg = styled.button`
  width: 30%;
  padding: 5px;
  background-color: #F5F5F5;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: lightgray;
  }  
`

export const DeleteProfile = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #F5F5F5;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;

  &:hover {
    background-color: red;
  }
`