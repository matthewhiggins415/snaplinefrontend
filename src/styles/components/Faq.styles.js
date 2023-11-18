import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border-radius: 15px;
  background-color: #ececec;
`

export const Top = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

export const Answer = styled.p`
  margin-top: 10px;
  display: ${(props) => (props.show ? "flex" : "none")};
`

export const Btn = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 20px;
`

export const BtnContainer = styled.div`
  display: flex;
`