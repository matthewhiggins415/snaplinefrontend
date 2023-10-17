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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const UploadContainer = styled.div`
  width: fit-content;
  margin: 20px auto;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const UploadBtn = styled.button`
  display: ${(props) => (props.showUploadBtn ? "flex" : "none")};
  padding: 10px 30px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 15px;
  border: none;
  transition: 150ms ease-in-out;
  
  &:hover {
    background-color: rgba(60, 64, 67, 0.3); 
  }
`