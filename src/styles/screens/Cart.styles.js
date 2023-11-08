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
  width: 100%;
  max-width: 900px;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`

export const CartItem = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ececec;
  margin-bottom: 25px;
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 730px) {
    /* Styles for screens up to 576px wide */
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
  }
`

export const CartItemInfo = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
`

export const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
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

  &:hover {
    background-color: red;
    color: white;
  }
`