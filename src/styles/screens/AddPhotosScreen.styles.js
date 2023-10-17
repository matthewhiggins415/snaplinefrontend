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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 150ms ease-in-out;
  background-color: white;
  width: 150px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.2px;
  
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`

export const FileLabel = styled.label`
  width: 150px;
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: 150ms ease-in-out;
  margin-bottom: 10px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`

export const RemoveFilesBtn = styled.button`
  display: ${(props) => (props.showUploadBtn ? "flex" : "none")};
  padding: 10px 30px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: 150ms ease-in-out;
  background-color: white;
  width: 150px;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  letter-spacing: 1.2px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
`