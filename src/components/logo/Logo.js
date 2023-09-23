import React from 'react';
import { LogoIcon } from '../../styles/icons/LogoIcon';
import { LogoContainer } from '../../styles/components/Logo.styles';

export const Logo = () => {
  return (
    <LogoContainer to="/">
      <p>Snap Line</p>
      <LogoIcon />
    </LogoContainer>
  )
}

export default Logo