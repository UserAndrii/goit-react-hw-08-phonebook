import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import {
  Alert,
  AlertTitle,
  Checkbox,
  FormControlLabel,
  Snackbar,
} from '@mui/material';

import { userRegistration } from 'redux/auth/authOperations';
import { selectErrorMessage } from 'redux/auth/authSelectors';
import { InAuth, AuthIcon, defaultTheme } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorMessage);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = data.get('fullName');
    const email = data.get('email');
    const password = data.get('password');

    if (name === '' || email === '' || password === '') {
      setOpenSnackbar(true);
      return;
    }

    dispatch(userRegistration({ name, email, password })).then(
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
            <AuthIcon />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                autoComplete="given-name"
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                margin="normal"
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>

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
                  <InAuth to="/login">
                    {'Already have an account? Sign in'}
                  </InAuth>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
      >
        {error ? (
          <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
            <AlertTitle>Error</AlertTitle>
            Invalid personal data entered. Try the following example:
            <p>name: </p> <strong>Your name</strong>,<p>email: </p>{' '}
            <strong>your.email@gmail.com</strong>,<p>password: </p>{' '}
            <strong>password77</strong>
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
};

export default RegisterForm;
