import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

import { userLogIn } from 'redux/auth/authOperations';
import { selectErrorMessage } from 'redux/auth/authSelectors';
import { LoginIcon, InAuth, defaultTheme } from './LoginForm.styled';

export default function LoginPage() {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorMessage);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    if (email === '' || password === '') {
      setOpenSnackbar(true);
      return;
    }

    dispatch(userLogIn({ email, password })).then(
      ({ meta: { rejectedWithValue } }) => {
        if (rejectedWithValue) setOpenSnackbar(true);
      }
    );
    event.target.reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="div" sx={{ height: '700px' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <LoginIcon />

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <InAuth to="/register">
                    {"Don't have an account? Sign Up"}
                  </InAuth>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        {error ? (
          <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
            <AlertTitle>Error</AlertTitle>
            Sorry, the login or password was entered incorrectly!!
          </Alert>
        ) : (
          <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
            <AlertTitle>Warning</AlertTitle>
            Sorry, field values ​​cannot be empty!
          </Alert>
        )}
      </Snackbar>
    </ThemeProvider>
  );
}
