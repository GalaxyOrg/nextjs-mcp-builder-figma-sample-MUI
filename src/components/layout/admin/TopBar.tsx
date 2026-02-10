'use client';

import React from 'react';
import {
    Box,
    Typography,
    IconButton,
    Avatar,
    Badge,
    Tooltip
} from '@mui/material';
import { Bell, Search, Menu } from 'lucide-react';

export default function TopBar() {
    return (
        <Box className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
            <Box className="flex items-center gap-4">
                <IconButton className="lg:hidden text-slate-500">
                    <Menu size={24} />
                </IconButton>
                <Box className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search activities..."
                        className="bg-slate-50 border-none rounded-full py-2.5 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                </Box>
            </Box>

            <Box className="flex items-center gap-6">
                <Tooltip title="Notifications">
                    <IconButton className="text-slate-500 hover:bg-slate-50 transition-colors">
                        <Badge badgeContent={4} color="error" overlap="circular">
                            <Bell size={22} />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <Box className="flex items-center gap-3 pl-4 border-l border-slate-100">
                    <Box className="text-right hidden sm:block">
                        <Typography variant="body2" className="font-bold text-slate-900">Admin User</Typography>
                        <Typography variant="caption" className="text-slate-500">Super Admin</Typography>
                    </Box>
                    <Avatar
                        sx={{
                            width: 40,
                            height: 40,
                            bgcolor: '#2563eb',
                            fontWeight: 'bold',
                            border: '2px solid white',
                            boxShadow: '0 0 10px rgba(0,0,0,0.05)'
                        }}
                    >
                        AD
                    </Avatar>
                </Box>
            </Box>
        </Box>
    );
}
