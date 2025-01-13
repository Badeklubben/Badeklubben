import React from 'react';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material';

interface ConfirmDialogProps {
    open: boolean;
    title: string;
    message: string;
    details?: React.ReactNode; // Ny prop for å vise detaljer
    onConfirm: () => void;
    onClose: () => void;
    confirmButtonText?: string;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
                                                         open,
                                                         title,
                                                         message,
                                                         details,
                                                         onConfirm,
                                                         onClose,
                                                         confirmButtonText
                                                     }: ConfirmDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
                {details}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Avbryt
                </Button>
                <Button variant="contained" onClick={onConfirm} color="primary">
                    {confirmButtonText || 'Bekreft'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;