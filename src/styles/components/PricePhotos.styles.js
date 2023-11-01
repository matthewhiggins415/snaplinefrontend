import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`

export const ImgContainer = styled.div`
  border: 1px solid lightgray;
  margin-top: 20px;
  border-radius: 10px;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
`

export const Input = styled.input`
  padding: 5px;
  border: none;
  outline: none;
  margin: 5px;
`

export const Btn = styled.button`
  padding: 5px;
  border: none;
  transition: 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`