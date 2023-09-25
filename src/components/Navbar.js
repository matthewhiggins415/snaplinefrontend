import React, { useState } from 'react';
import { NavbarContainer, LeftContainer, CenterContainer, RightContainer, BecomePhotographerLink } from '../styles/components/Navbar.styles';
import Logo from './logo/Logo';
import SearchBarBtn from './searchBtn/SearchBarBtn';
import UserMenu from './userMenu/UserMenu';
import DropDown from './dropdownmenu/Dropdown';
import SearchBar from './searchbar/SearchBar';

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleDropShow = () => {
    setShowDropDown(!showDropDown)
  }

  const handleSearchShow = () => {
    setShowSearchBar(!showSearchBar)
  }

  return (
    <>
      <NavbarContainer>
        <LeftContainer>
          <Logo />
        </LeftContainer>
        <CenterContainer>
          <SearchBarBtn handleShow={handleSearchShow}/>
        </CenterContainer>
        <RightContainer>
          <BecomePhotographerLink to="/becomephotographer">Become a Photographer</BecomePhotographerLink>
          <UserMenu handleDropShow={handleDropShow}/>
        </RightContainer>
      </NavbarContainer>
      <SearchBar show={showSearchBar} close={handleSearchShow}/>
      <DropDown show={showDropDown} handleDropShow={handleDropShow} setShowDropDown={setShowDropDown}/>
    </>
  )
};

export default Navbar