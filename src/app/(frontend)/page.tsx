'use client';

import React from 'react';
import {
    Container,
    Typography,
    Button,
    Box,
    Card,
    CardContent,
    Stack,
    Link
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Zap,
    Shield,
    Smartphone,
    Layout,
    MousePointer2,
    ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

interface Feature {
    title: string;
    description: string;
    icon: React.ReactElement<{ size?: number; className?: string }>;
}

const features: Feature[] = [
    {
        title: 'Lightning Fast',
        description: 'Built on Next.js 15 for optimal performance and SEO right out of the box.',
        icon: <Zap className="text-blue-600" />,
    },
    {
        title: 'Secure by Design',
        description: 'Professional-grade protection and best practices for your enterprise apps.',
        icon: <Shield className="text-indigo-600" />,
    },
    {
        title: 'Responsive First',
        description: 'Perfectly optimized for every screen size, from mobile to ultra-wide.',
        icon: <Smartphone className="text-purple-600" />,
    },
    {
        title: 'Modern Stack',
        description: 'The power of MUI v6 combined with the flexibility of Tailwind CSS.',
        icon: <Layout className="text-pink-600" />,
    },
];

export default function LandingPage() {
    return (
        <Box>
            {/* Hero Section */}
            <Box className="relative overflow-hidden pt-20 pb-32">
                <Box className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-50/50 -z-10 blur-3xl rounded-full" />

                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, lg: 7 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Typography
                                    variant="overline"
                                    className="text-blue-600 font-bold tracking-widest bg-blue-50 px-4 py-1.5 rounded-full"
                                >
                                    NEXT-GEN DEVELOPMENT
                                </Typography>
                                <Typography
                                    variant="h1"
                                    className="text-5xl md:text-7xl font-extrabold text-slate-900 mt-6 leading-tight"
                                >
                                    Build <span className="text-transparent bg-clip-text premium-gradient">Premium</span> Interfaces in Minutes
                                </Typography>
                                <Typography
                                    variant="h5"
                                    className="text-slate-500 mt-8 leading-relaxed max-w-2xl font-normal"
                                >
                                    The most professional Next.js template featuring Material UI v6 and Tailwind CSS.
                                    Designed for developers who refuse to compromise on aesthetics.
                                </Typography>

                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} className="mt-10">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        endIcon={<ArrowRight size={20} />}
                                        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full text-lg normal-case font-bold shadow-lg shadow-blue-200"
                                    >
                                        Start Building
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-4 rounded-full text-lg normal-case font-bold"
                                    >
                                        View Demo
                                    </Button>
                                </Stack>

                                <Box className="mt-12 flex items-center gap-4 text-slate-400">
                                    <Box className="flex -space-x-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <Box key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                        ))}
                                    </Box>
                                    <Typography variant="body2" className="font-medium">
                                        Joined by <span className="text-slate-900 font-bold">2,000+</span> developers this month
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>

                        <Grid size={{ xs: 12, lg: 5 }} className="hidden lg:block">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <Box className="premium-gradient w-[500px] h-[500px] rounded-3xl rotate-6 absolute -z-10" />
                                <Box className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-2xl relative overflow-hidden h-[450px]">
                                    <Box className="flex items-center gap-2 mb-8">
                                        <Box className="w-3 h-3 rounded-full bg-red-400" />
                                        <Box className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <Box className="w-3 h-3 rounded-full bg-green-400" />
                                    </Box>
                                    <Box className="space-y-6">
                                        <Box className="w-2/3 h-4 bg-slate-100 rounded-full animate-pulse" />
                                        <Box className="w-full h-24 bg-slate-50 rounded-2xl border border-dashed border-slate-200 flex items-center justify-center">
                                            <MousePointer2 className="text-blue-400 animate-bounce" />
                                        </Box>
                                        <Box className="grid grid-cols-2 gap-4">
                                            <Box className="h-20 bg-blue-50/50 rounded-2xl" />
                                            <Box className="h-20 bg-indigo-50/50 rounded-2xl" />
                                        </Box>
                                        <Box className="w-full h-4 bg-slate-100 rounded-full animate-pulse" />
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" className="py-24">
                <Typography
                    variant="h2"
                    align="center"
                    className="text-4xl font-bold text-slate-900 mb-4"
                >
                    Everything you need for perfection
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    className="text-slate-500 mb-16 max-w-2xl mx-auto text-lg"
                >
                    Stop wasting time on configuration. Focus on building amazing user experiences with our production-ready components.
                </Typography>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Card className="h-full border-0 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <CardContent className="p-8">
                                        <Box className="mb-6 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                                            {React.cloneElement(feature.icon, { size: 24 })}
                                        </Box>
                                        <Typography variant="h6" className="font-bold text-slate-900 mb-3">
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body2" className="text-slate-500 leading-relaxed">
                                            {feature.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
