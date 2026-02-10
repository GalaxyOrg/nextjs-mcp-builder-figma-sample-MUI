'use client';

import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Container,
    InputAdornment,
    IconButton,
    Alert,
    Snackbar
} from '@mui/material';
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (username === 'admin' && password === 'admin') {
            setSuccess(true);
            setTimeout(() => {
                router.push('/admin/dashboard');
            }, 1500);
        } else {
            setError('Invalid username or password. Try admin / admin.');
        }
    };

    return (
        <Box className="min-h-[80vh] flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <Container maxWidth="xs">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <Card className="shadow-xl rounded-3xl overflow-hidden border-0">
                        <Box className="premium-gradient p-8 text-center text-white">
                            <Typography variant="h4" fontWeight="bold">Welcome Back</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, mt: 1 }}>
                                Log in to access your premium dashboard
                            </Typography>
                        </Box>

                        <CardContent className="p-8">
                            <form onSubmit={handleLogin} className="space-y-8">
                                <TextField
                                    fullWidth
                                    label="Username"
                                    placeholder="admin"
                                    variant="outlined"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <User size={20} className="text-slate-400" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                />

                                <Box className="mt-6">
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        placeholder="admin"
                                        type={showPassword ? 'text' : 'password'}
                                        variant="outlined"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock size={20} className="text-slate-400" />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{ '& .MuiOutlinedInput-root': { borderRadius: 3 } }}
                                    />
                                </Box>

                                {error && (
                                    <Alert severity="error" className="rounded-xl border-0 bg-red-50 text-red-600">
                                        {error}
                                    </Alert>
                                )}

                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    startIcon={<LogIn size={20} />}
                                    className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-lg normal-case font-bold shadow-lg shadow-blue-100 transition-all active:scale-95 mt-10"
                                >
                                    Sign In
                                </Button>

                                <Box className="text-center pt-2">
                                    <Typography variant="body2" className="text-slate-500">
                                        Don't have an account? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Sign up</span>
                                    </Typography>
                                </Box>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </Container>

            <Snackbar
                open={success}
                autoHideDuration={2000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success" variant="filled" sx={{ width: '100%', borderRadius: 3 }}>
                    Login Successful! Redirecting...
                </Alert>
            </Snackbar>
        </Box>
    );
}
