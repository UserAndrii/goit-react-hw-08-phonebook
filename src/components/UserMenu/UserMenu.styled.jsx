import styled from 'styled-components';
import { RxAvatar } from 'react-icons/rx';

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 300px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 300px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 799px) {
    justify-content: end;
    margin-top: 20px;
  }
`;

export const Avatar = styled(RxAvatar)`
  margin-right: 4px;
  width: 32px;
  height: 32px;
  color: #ba000d;
`;

export const UserName = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;

export const LogOut = styled.button`
  display: inline-block;
  text-align: center;

  padding: 10px;
  width: 82px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.15;
  text-decoration: none;
  cursor: pointer;

  color: black;
  border-radius: 4px;
  border: 1px solid #78909c;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 320px) {
    width: 112px;
  }

  :hover,
  :focus {
    color: white;
    background-color: #607d8b;
  }
`;
