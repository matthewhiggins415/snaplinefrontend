import styled, { keyframes, css } from "styled-components";
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DropDownContainer = styled.div`
  min-width: 300px;
  border-radius: 20px;
  border: 1px solid #ececec;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  right: 3em;
  top: 5em;
  background-color: white;
  cursor: pointer;
  transition: 150ms ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  &:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.85);
  }

  ${(props) =>
    props.show && css`animation: ${fadeIn} 150ms ease-in-out;`
  }
`;

export const DropDownBtn = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 15px 30px;
  color: black;
  text-decoration: none;
  text-align: left;
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  text-decoration: none;
  background-color: white;
  border: none;
  cursor: pointer;
  transition: 150ms ease-in-out;
  
  &:hover {
    background-color: #ECECEC;
  }

  &:first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  &:last-child {
    border-top: 1px solid #ECECEC;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`