import React, { useState } from 'react';
import { NavbarContainer, LeftContainer, RightContainer, BecomePhotographerLink } from '../styles/components/Navbar.styles';
import Logo from './logo/Logo';
import UserMenu from './userMenu/UserMenu';
import DropDown from './dropdownmenu/Dropdown';
import SearchBar from './searchbar/searchBar';

const Navbar = ({ user, handleSignOut }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropShow = () => {
    setShowDropDown(!showDropDown)
  }

  return (
    <>
      <NavbarContainer>
        <LeftContainer>
          <Logo />
        </LeftContainer>
        <RightContainer>
          <BecomePhotographerLink to="/becomephotographer">Become a Photographer</BecomePhotographerLink>
          <UserMenu user={user} handleDropShow={handleDropShow} />
        </RightContainer>
      </NavbarContainer>
      <SearchBar />
      <DropDown user={user} show={showDropDown} handleDropShow={handleDropShow} setShowDropDown={setShowDropDown} handleSignOut={handleSignOut} />
    </>
  )
};

export default Navbar