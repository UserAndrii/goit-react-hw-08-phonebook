import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) and (max-width: 799px) {
    justify-content: end;
    margin-top: 20px;
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
