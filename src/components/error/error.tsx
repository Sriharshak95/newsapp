import React from 'react';
import Button from '@material-ui/core/Button';
import { Backdrop } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { backDropStyles } from '../../styles';


const Error = () => {
  const classes = backDropStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(true);
  }

  const retryHandler = () => window.location.reload();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Oops!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Unable to connect to server at this time. Try Again!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={retryHandler} color="primary" autoFocus>
              Retry
          </Button>
          </DialogActions>
        </Dialog>
      </Backdrop>
    </div>
  );
};

export default Error;