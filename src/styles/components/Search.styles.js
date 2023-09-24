import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  min-height: 100px;
  padding-top: 20px;
  padding-bottom: 40px;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 150ms ease-in-out;


  ${(props) =>
    props.show && css`animation: ${fadeIn} 150ms ease-in-out;`
  }
`

export const Form = styled.form`
  min-width: 70%;
  display: flex;
  padding: 25px;
  margin-top: 40px;
  border-radius: 50px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.85);
  }
`

export const FormInput = styled.input`
  padding: 12px;
  width: 100%;
  border: none;
  outline: none;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  text-align: center;
  cursor: pointer;
`

export const CenterFormInput = styled(FormInput)`
  border-left: 2px solid #ECECEC;
  border-right: 2px solid #ECECEC;
`;

export const FormBtn = styled.button`
  width: 350px;
  color: white;
  background-color: red;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  padding: 10px;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
`

export const CloseBtn = styled.button`
  padding: 10px;
  position: absolute;
  right: 10px;
  border-radius: 50%;
  border: none;
  background-color: white;
  cursor: pointer;
  top: 100px;
`
