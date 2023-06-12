import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsLogged } from 'redux/auth/authSelectors';
import { LinkLogo, Link, LogoIcon, Nav, NavMenu } from './Navigation.styled';

const Navigation = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <Nav>
      <LinkLogo to="/">
        <LogoIcon />
        Phonebook
      </LinkLogo>
      <NavMenu>
        <Link to="/">Home</Link>
        {isLogged && <Link to="/contacts">Contacts</Link>}
      </NavMenu>
    </Nav>
  );
};

export default Navigation;
