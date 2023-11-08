import React, { useState, useEffect } from 'react';
import { ScreenContainer, CartContainer, CartItem, Image, RemoveBtn, CartItemInfo } from '../styles/screens/Cart.styles';
import { useNavigate } from "react-router-dom";
import { getCart, removeFromCart } from '../api/cart';

const Cart = ({ user, setUser, notify }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  console.log("cart", cart)

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    }

    const getItemsInCart = async (user) => {
      try {
        const response = await getCart(user);
        console.log("response: ", response)
        setCart(response.data.cart)
      } catch(error) {
        console.log(error)
      }
    }

    getItemsInCart(user)
  }, [])
  
  const handleRemove = async (user, id) => {
    try {
      const response = await removeFromCart(user, id)
      console.log(response)

      if (response.status === 200) {
        setUser(response.data.user)
        setCart(response.data.user.cart)
        notify("item removed")
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <ScreenContainer>
      <h1>{user.firstName + "'s cart"}</h1>
      <CartContainer>
        {Object.keys(cart).length > 0 
          ? cart.map((item) => (
            <CartItem key={item._id}>
              <Image src={item.url}/>
              <CartItemInfo>
                <div>
                <p>{"$" + item.discountPrice}</p>

                  <p>{"$" + item.price}</p>
                  <p>{item.sport}</p>
                  <p>{item.location}</p>
                  <p>{item.date}</p>
                  <p>{"taken by: " + item.photographerName}</p>
                </div>
                <RemoveBtn onClick={() => handleRemove(user, item._id)}>remove</RemoveBtn>
              </CartItemInfo>
            </CartItem>
          ))
          : <p>nothing in cart</p> }
      </CartContainer>
      <div>

      </div>
    </ScreenContainer>
  )   
}

export default Cart