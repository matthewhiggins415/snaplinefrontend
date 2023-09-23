import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  min-height: 50px;
  background-color: white;
  display: flex;
  border-bottom: 1px solid  #ececec;
  padding: 5px;
  margin: 0 auto;
`

export const BecomePhotographerLink = styled(Link)`
  color: black;
  height: 50px;
  font-size: small;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 1.2px;
  text-decoration: none;
  margin: 10px;
  display: flex; 
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: 150ms ease-in-out;
  text-align: center;

  &:hover {
    background-color: #F5F5F5;
  }
`

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`

export const CenterContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`


export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
`