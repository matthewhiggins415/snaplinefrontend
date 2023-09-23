import styled from 'styled-components';

export const UserMenuContainer = styled.button`
  padding: 15px;
  width: auto;
  height: 50px;
  border: 1px solid #ECECEC;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 5px;
  transition: 150ms ease-in-out;
  background-color: white;
  box-shadow: 0px 2px 2px -2px rgba(0, 0, 0, 0.85); 
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.85);
  }
`