import styled from 'styled-components';

export const UserMenuContainer = styled.button`
  padding: 7px;
  width: auto;
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

export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  margin-right: 5px;
  object-fit: cover;
`