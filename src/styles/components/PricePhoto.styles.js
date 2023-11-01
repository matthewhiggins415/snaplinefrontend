import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
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
  margin: 0px;
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
  border-radius: 5px;
  padding-bottom: 10px;
  padding-top: 10px;

  &:hover {
    background-color: red;
    color: white;
  }
`