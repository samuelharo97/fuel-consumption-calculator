import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertProps {
  title: string;
  message: string;
  handleAccept: () => void;
  isOpen: boolean;
  handleClose: () => void;
}

export const AlertDialog: React.FC<AlertProps> = ({
  title,
  message,
  handleAccept,
  isOpen = false,
  handleClose,
}) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>

          <Button onClick={handleAccept}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
