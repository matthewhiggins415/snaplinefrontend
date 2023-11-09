import React, { useState, useEffect } from 'react';
import { ScreenContainer, CartContainer, CartItem, Image, RemoveBtn, CartItemInfo, SummaryContainer, Summary } from '../styles/screens/Cart.styles';
import { useNavigate } from "react-router-dom";
import { getCart, removeFromCart } from '../api/cart';
import { TbAxisX } from 'react-icons/tb';

const Cart = ({ user, setUser, notify }) => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate("/");
    }

    const getItemsInCart = async (user) => {
      try {
        const response = await getCart(user);

        if (response.status === 200) {
          setCart(response.data.cart)
          calculateCart(response.data.cart)
        }
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
        calculateCart(response.data.user.cart)
      }
    } catch(error) {
      console.log(error)
    }
  }

  const calculateCart = (cart) => {
    console.log("calc cart:", cart);
    let subTotal = 0;
    for (const item of cart) {
      if (item.discountPrice > 0) {
        subTotal = subTotal + item.discountPrice;
        setSubtotal(subTotal);
      } else {
        subTotal = subTotal + item.price;
        setSubtotal(subTotal);
      }
    }

    let percentage = 5
    let tax = (percentage / 100) * subTotal
    const roundedTax = parseFloat(tax.toFixed(3))
    setTax(roundedTax);

    let total = parseFloat(subTotal + roundedTax);
    setCartTotal(total);
  }

  return (
    <ScreenContainer>
      <SummaryContainer>
        <h2>{user.firstName + "'s cart summary"}</h2>
        <Summary>
          <div>
            <p>Cart Subtotal:</p>
            <p>Tax (5%):</p>
            <p>Cart Total:</p>
          </div>
          <div>
            <p>{"$" + subtotal}</p>
            <p>{"$" + tax}</p>
            <p>{"$" + cartTotal}</p>
          </div>
        </Summary>
      </SummaryContainer>
      <CartContainer>
        {Object.keys(cart).length > 0 
          ? cart.map((item) => (
            <CartItem key={item._id}>
              <Image src={item.url}/>
              <CartItemInfo>
                <div>
                  <p>{item.sport}</p>
                  <p>{item.location}</p>
                  <p>{item.date}</p>
                  <p>{"shot by: " + item.photographerName}</p>

                  <div>
                    <p>Price: {"$" + item.price}</p>
                    <p>Discount Price: {"$" + item.discountPrice}</p>
                  </div>
                </div>
                <RemoveBtn onClick={() => handleRemove(user, item._id)}>remove</RemoveBtn>
              </CartItemInfo>
            </CartItem>
          ))
          : <p>nothing in cart</p> }
      </CartContainer>
    </ScreenContainer>
  )   
}

export default Cart