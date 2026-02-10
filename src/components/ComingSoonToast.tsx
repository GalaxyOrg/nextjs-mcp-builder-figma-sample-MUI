'use client';

import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ComingSoonToastProps {
    open: boolean;
    onClose: () => void;
    featureName: string;
}

export default function ComingSoonToast({ open, onClose, featureName }: ComingSoonToastProps) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert onClose={onClose} severity="info" variant="filled" sx={{ width: '100%', borderRadius: 3 }}>
                The <strong>{featureName}</strong> feature is under development!
            </Alert>
        </Snackbar>
    );
}
