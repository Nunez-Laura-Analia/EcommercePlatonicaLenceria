import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from '@mui/material/DialogTitle';

const Modal = ({ handClose, open, children, title }) => {
  return (
    <Dialog onClose={handClose} open={open}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
