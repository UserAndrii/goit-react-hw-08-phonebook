import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiLogInCircle } from 'react-icons/bi';

import { createTheme } from '@mui/material/styles';

export const LoginIcon = styled(BiLogInCircle)`
  width: 50px;
  height: 50px;
  color: #ba000d;
`;

export const InAuth = styled(Link)`
  color: #90a4ae;
  transition: all 0.25s ease-Out;

  :hover {
    color: #607d8b;
    text-decoration: underline;
  }
`;

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#90a4ae',
      main: '#78909c',
      dark: '#607d8b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
