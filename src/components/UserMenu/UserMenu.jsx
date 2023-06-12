import { useDispatch, useSelector } from 'react-redux';

import { userLogOut } from 'redux/auth/authOperations';
import { selectUsername } from 'redux/auth/authSelectors';
import { UserContainer, Avatar, UserName, LogOut } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <UserContainer>
      <Avatar />
      <UserName>Hello, {name}</UserName>
      <LogOut type="button" onClick={() => dispatch(userLogOut())}>
        Log Out
      </LogOut>
    </UserContainer>
  );
};

export default UserMenu;
