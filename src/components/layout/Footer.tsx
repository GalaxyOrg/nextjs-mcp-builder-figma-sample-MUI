'use client';

import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Layers, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <Box component="footer" className="bg-slate-50 border-t border-slate-100 py-16">
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box className="flex items-center gap-2 mb-6">
                            <Box className="w-8 h-8 premium-gradient rounded-lg flex items-center justify-center text-white">
                                <Layers size={18} />
                            </Box>
                            <Typography variant="h6" className="font-bold tracking-tight text-slate-900">
                                Antigravity<span className="text-blue-600">UI</span>
                            </Typography>
                        </Box>
                        <Typography variant="body2" className="text-slate-500 mb-6 leading-relaxed">
                            Elevating web development with premium MUI components and Tailwind CSS.
                            Build faster, look better, and stay state-of-the-art.
                        </Typography>
                        <Box className="flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github size={20} /></Link>
                            <Link href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle2" className="font-bold text-slate-900 mb-6">Product</Typography>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 no-underline transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 no-underline transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 no-underline transition-colors">Guide</Link></li>
                        </ul>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle2" className="font-bold text-slate-900 mb-6">Company</Typography>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 no-underline transition-colors">About</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 no-underline transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-sm text-slate-500 hover:text-blue-600 no-underline transition-colors">Blog</Link></li>
                        </ul>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="subtitle2" className="font-bold text-slate-900 mb-6">Stay Updated</Typography>
                        <Typography variant="body2" className="text-slate-500 mb-6">
                            Subscribe to our newsletter for the latest updates and premium assets.
                        </Typography>
                        {/* Newsletter input placeholder */}
                        <Box className="bg-white p-1 rounded-full border border-slate-200 flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none focus:outline-none flex-1 px-4 text-sm"
                            />
                            <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors">
                                Join
                            </button>
                        </Box>
                    </Grid>
                </Grid>
                <Box className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <Typography variant="caption" className="text-slate-400">
                        © 2026 AntigravityUI Inc. All rights reserved.
                    </Typography>
                    <Box className="flex gap-8">
                        <Link href="#" className="text-xs text-slate-400 hover:text-blue-600 no-underline">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-slate-400 hover:text-blue-600 no-underline">Terms of Service</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
