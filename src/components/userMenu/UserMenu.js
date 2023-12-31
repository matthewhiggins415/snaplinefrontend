import { Hamburger } from '../../styles/icons/HamburgerIcon';
import { User } from '../../styles/icons/User';

import { UserMenuContainer, UserImg } from '../../styles/components/UserMenu.styles';

export const UserMenu = ({ user, handleDropShow }) => {
  console.log(user)

  console.log(Object.keys(user).length)
  return (
    <UserMenuContainer onClick={handleDropShow}>
      <Hamburger />
      { user.picture === '' || user.picture === undefined ? <User /> : <UserImg alt="user profile" src={user.picture}></UserImg>}
    </UserMenuContainer>
  )
}

export default UserMenu