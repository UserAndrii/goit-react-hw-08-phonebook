import { useSelector } from 'react-redux';
import { selectIsLogged } from 'redux/auth/authSelectors';

import { Header } from './AppBar.styled';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

export default function AppBar() {
  const isLogged = useSelector(selectIsLogged);

  return (
    <Header>
      <Navigation />
      {isLogged ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
