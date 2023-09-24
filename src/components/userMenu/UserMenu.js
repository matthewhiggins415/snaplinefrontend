import { Hamburger } from '../../styles/icons/HamburgerIcon';
import { User } from '../../styles/icons/User';

import { UserMenuContainer } from '../../styles/components/UserMenu.styles';

export const UserMenu = ({ handleDropShow }) => {
  return (
    <UserMenuContainer onClick={handleDropShow}>
      <Hamburger />
      <User />
    </UserMenuContainer>
  )
}

export default UserMenu