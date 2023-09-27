import React, { useEffect, useRef } from 'react';
import { DropDownContainer, DropDownBtn, SignOutBtn } from '../../styles/components/Dropdown.styles';

const DropDown = ({ user, show, setShowDropDown, handleSignOut={handleSignOut} }) => {
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
          <DropDownBtn to="/profile/matt">Profile</DropDownBtn>
      }
      {
        Object.keys(user).length === 0 ? 
          <DropDownBtn to="/register">Sign up</DropDownBtn> :
          <></>
      }
      <DropDownBtn to="/helpcenter">Help Center</DropDownBtn>
      { Object.keys(user).length === 0 ? 
          <></> : 
          <SignOutBtn onClick={handleSignOut}>Logout</SignOutBtn> }
    </DropDownContainer>
  )
}

export default DropDown