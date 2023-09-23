import React from 'react';
import { DropDownContainer, DropDownLink } from '../../styles/components/Dropdown.styles';

const DropDown = ({ show }) => {
  return (
    <DropDownContainer show={show}>
      <DropDownLink>Login</DropDownLink>
      <DropDownLink>Sign up</DropDownLink>
      <DropDownLink>Help Center</DropDownLink>
    </DropDownContainer>
  )
}

export default DropDown