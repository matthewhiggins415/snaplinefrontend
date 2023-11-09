import React, { useEffect, useRef } from 'react';
import { DropDownContainer, DropDownBtn, SignOutBtn } from '../../styles/components/Dropdown.styles';
import { useNavigate } from "react-router-dom";

const DropDown = ({ user, show, setShowDropDown, handleSignOut }) => {
  const navigate = useNavigate();

  let menu = useRef()

  useEffect(() => {
    let handler = (event) => {
      if (!menu.current.contains(event.target)) {
        setShowDropDown(false);
      }
    }
    
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <DropDownContainer ref={menu} show={show}>
      { Object.keys(user).length === 0 ? 
          <DropDownBtn to="/login">Login</DropDownBtn> :
          <>
            <DropDownBtn to={`/profile/${user._id}`}>Profile</DropDownBtn>
            <DropDownBtn to="/cart">{user.cart.length > 0 ? "Cart" + " " + "(" + user.cart.length + ")" : "Cart"}</DropDownBtn>
          </>
      }
      {
        user.isPhotographer === true 
        ? <DropDownBtn to="/add">Add new photos</DropDownBtn> 
        : ''
      }
      {
        user.isPhotographer === true 
        ? <DropDownBtn to={`/photographer/${user._id}`}>My Albums</DropDownBtn> 
        : ''
      }
      {
        Object.keys(user).length === 0 ? 
          <DropDownBtn to="/register">Sign up</DropDownBtn> :
          <></>
      }
      <DropDownBtn to="/helpcenter">Help Center</DropDownBtn>
      { Object.keys(user).length === 0 ? 
          <></> : 
          <SignOutBtn onClick={() =>{
            handleSignOut();
            navigate("/");
          }}>Logout</SignOutBtn> 
      }
    </DropDownContainer>
  )
}

export default DropDown