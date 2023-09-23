import React, { useState } from 'react';
import { NavbarContainer, LeftContainer, CenterContainer, RightContainer, BecomePhotographerLink } from '../styles/components/Navbar.styles';
import Logo from './logo/Logo';
import SearchBar from './search/Searchbar';
import UserMenu from './userMenu/UserMenu';
import DropDown from './dropdownmenu/Dropdown';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show)
    console.log(show)
  }

  return (
    <>
      <NavbarContainer>
        <LeftContainer>
          <Logo />
        </LeftContainer>
        <CenterContainer>
          <SearchBar />
        </CenterContainer>
        <RightContainer>
          <BecomePhotographerLink to="/something">Become a Photographer</BecomePhotographerLink>
          <UserMenu handleShow={handleShow}/>
        </RightContainer>
      </NavbarContainer>
      <DropDown show={show}/>
    </>
  )
};

export default Navbar