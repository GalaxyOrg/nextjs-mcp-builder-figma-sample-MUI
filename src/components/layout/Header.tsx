'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Typography, Container, Box } from '@mui/material';
import { Layers } from 'lucide-react';
import ComingSoonDialog from '../ComingSoonDialog';

export default function Header() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState('');

    const handleLinkClick = (e: React.MouseEvent, name: string) => {
        e.preventDefault();
        setActiveFeature(name);
        setDialogOpen(true);
    };

    return (
        <Box component="header" className="py-4 border-b border-gray-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
            <Container maxWidth="lg">
                <Box className="flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <Box className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center text-white">
                            <Layers size={21} />
                        </Box>
                        <Typography variant="h6" className="font-bold tracking-tight text-slate-900">
                            Antigravity<span className="text-blue-600">UI</span>
                        </Typography>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
                        <a href="#" onClick={(e) => handleLinkClick(e, 'Portfolio')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Portfolio</a>
                        <a href="#" onClick={(e) => handleLinkClick(e, 'About')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
                        <a href="#" onClick={(e) => handleLinkClick(e, 'Contact')} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
                    </nav>

                    <Box className="flex items-center gap-4">
                        <Link href="/user/login">
                            <Button color="inherit" className="font-semibold text-slate-700">Login</Button>
                        </Link>
                        <Button variant="contained" className="bg-blue-600 hover:bg-blue-700 rounded-full px-6 py-2 normal-case font-semibold">
                            Get Started
                        </Button>
                    </Box>
                </Box>
            </Container>

            <ComingSoonDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                featureName={activeFeature}
            />
        </Box>
    );
}
