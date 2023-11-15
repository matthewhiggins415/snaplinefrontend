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
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.85);
  }

  @media (max-width: 420px) {
    /* Styles for screens up to 576px wide */
    margin: 0px;
  }
`

export const UserImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 25px;
  margin-right: 5px;
  object-fit: cover;
`