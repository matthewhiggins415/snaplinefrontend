import styled from 'styled-components';

export const SeachBarContainer = styled.button`
  min-width: 420px; 
  font-size: small;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border: 1px solid #ECECEC;
  border-radius: 20px;
  transition: 150ms ease-in-out;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 2px 2px -2px rgba(0, 0, 0, 0.85); 

  &:hover {
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.85);
  }
`

export const SearchParamContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  justify-content: space-evenly;
  text-align: center;
`