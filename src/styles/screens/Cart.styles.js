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
    text-align: center;
  }
`

export const CartContainer = styled.div`
  height: fit-content;
  min-height: 90vh;
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  flex-direction: column;
`

export const CartItem = styled.div`
  width: fit-content;
  min-width: 250px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: none;
  transition: 150ms ease-in-out;
  border-radius: 15px;
  padding: 10px;

  &:hover {
    background-color: #F5F5F5;
  }
`

export const Overlay = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  z-index: 5;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);

  &:after {
    position: absolute;
    width: 100%;
    height: 350px;
    overflow: hidden;
    top: -10px;
    left: 10px;
    content: ${(props) => (props.photographerName ? `"${props.photographerName + " " + props.photographerName}"` : '""')};
    transform: rotate(-30deg);
    font-size: 5em;
    color: rgba(255, 255, 255, 0.4);
  }
`

export const CartItemInfo = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  padding-left: 20px;

  div {
    margin-top: 20px;
  }
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
`

export const RemoveBtn = styled.button`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #ececec;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  outline: none;
  border-radius: 10px;
  transition: 150ms ease-in-out;
  border: none;
  color: red;
  margin: 10px auto;

  &:hover {
    background-color: red;
    color: white;
  }
`

export const SummaryContainer = styled.div`
  width: 100%;
  max-width: 900px;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const Summary = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  margin-top: 20px;
`