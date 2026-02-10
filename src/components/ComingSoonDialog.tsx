'use client';

import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Typography,
} from '@mui/material';
import { Rocket } from 'lucide-react';

interface ComingSoonDialogProps {
    open: boolean;
    onClose: () => void;
    featureName: string;
}

export default function ComingSoonDialog({ open, onClose, featureName }: ComingSoonDialogProps) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                style: {
                    borderRadius: 20,
                    padding: '16px',
                }
            }}
        >
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Rocket className="text-blue-600" />
                <Typography variant="h5" component="span" fontWeight="bold">Coming Soon!</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ mt: 1 }}>
                    The <span className="font-bold text-blue-600">{featureName}</span> feature is currently under development.
                    We are working hard to bring you a premium experience. Stay tuned!
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" className="rounded-full px-6">
                    Got it
                </Button>
            </DialogActions>
        </Dialog>
    );
}
