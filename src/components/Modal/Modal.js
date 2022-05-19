import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Modal = ({handClose, open, children}) => {
    return(
        <Dialog onClose={handClose} open= {open}>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal