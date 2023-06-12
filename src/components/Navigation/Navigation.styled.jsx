import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcReadingEbook } from 'react-icons/fc';

export const Nav = styled.nav`
  @media screen and (max-width: 599px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  display: flex;
  align-items: center;
  gap: 20px;
`;

export const LinkLogo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-style: 400;
  font-weight: 900;
  font-size: 26px;
  line-height: 1.62;
  letter-spacing: 0.06em;

  color: #ba000d;
  text-decoration: none;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 599px) {
    margin-bottom: 40px;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  width: 60px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.15;
  text-decoration: none;

  color: black;
  border-radius: 4px;
  border: 1px solid #78909c;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 320px) {
    width: 90px;
  }

  &.active {
    color: white;
    background-color: #607d8b;
  }

  :hover,
  :focus {
    color: white;
    background-color: #607d8b;
  }
`;

export const LogoIcon = styled(FcReadingEbook)`
  width: 50px;
  height: 50px;
`;
