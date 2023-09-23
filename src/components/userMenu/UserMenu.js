import { Hamburger } from '../../styles/icons/HamburgerIcon';
import { User } from '../../styles/icons/User';

import { UserMenuContainer } from '../../styles/components/UserMenu.styles';

export const UserMenu = ({ handleShow }) => {
  return (
    <UserMenuContainer onClick={handleShow}>
      <Hamburger />
      <User />
    </UserMenuContainer>
  )
}

export default UserMenu