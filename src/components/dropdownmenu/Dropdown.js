import React, { useEffect, useRef } from 'react';
import { DropDownContainer, DropDownBtn } from '../../styles/components/Dropdown.styles';

const DropDown = ({ show, setShowDropDown }) => {
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
      <DropDownBtn to="/login">Login</DropDownBtn>
      <DropDownBtn to="/register">Sign up</DropDownBtn>
      <DropDownBtn to="/helpcenter">Help Center</DropDownBtn>
    </DropDownContainer>
  )
}

export default DropDown