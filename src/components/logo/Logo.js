import React from 'react';
import { LogoIcon } from '../../styles/icons/LogoIcon';
import { LogoContainer } from '../../styles/components/Logo.styles';

export const Logo = () => {
  return (
    <LogoContainer to="/">
      <p title="everyone needs a hobby">Pix Marketplace</p>
      <LogoIcon/>
    </LogoContainer>
  )
}

export default Logo