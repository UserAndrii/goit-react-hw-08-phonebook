import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  Button,
  TextField,
  Snackbar,
  Alert,
  AlertTitle,
  DialogTitle,
  DialogContent,
  DialogActions,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';

const EditContactModal = ({ open, onClose, id, name, number }) => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(name);
  const [phoneNumber, setPhoneNumber] = useState(number);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSave = () => {
    if (userName === '' || phoneNumber === '') {
      setOpenSnackbar(true);
      return;
    }

    dispatch(
      updateContact({ id, name: userName.trim(), number: phoneNumber.trim() })
    );
    onClose();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={userName}
            onChange={({ target: { value } }) => setUserName(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={({ target: { value } }) => setPhoneNumber(value)}
            fullWidth
            variant="outlined"
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="warning" onClose={() => setOpenSnackbar(false)}>
          <AlertTitle>Warning</AlertTitle>
          Sorry, field values ​​cannot be empty!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

EditContactModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export const defaultTheme = createTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#ba000d',
      dark: '#f44336',
      contrastText: '#000',
    },
    secondary: {
      light: '#90a4ae',
      main: '#78909c',
      dark: '#607d8b',
      contrastText: '#fff',
    },
  },
});

export default EditContactModal;
