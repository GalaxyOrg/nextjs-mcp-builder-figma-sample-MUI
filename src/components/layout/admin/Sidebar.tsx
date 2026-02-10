'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider
} from '@mui/material';
import {
    LayoutDashboard,
    Users,
    Settings,
    Layers,
    BarChart3,
    Package,
    LogOut
} from 'lucide-react';
import ComingSoonToast from '../../ComingSoonToast';

const menuItems = [
    { text: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin/dashboard' },
    { text: 'Analytics', icon: <BarChart3 size={20} />, path: '#', comingSoon: true },
    { text: 'Products', icon: <Package size={20} />, path: '#', comingSoon: true },
    { text: 'Users', icon: <Users size={20} />, path: '#', comingSoon: true },
    { text: 'Settings', icon: <Settings size={20} />, path: '#', comingSoon: true },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [toastOpen, setToastOpen] = useState(false);
    const [activeFeature, setActiveFeature] = useState('');

    const handleItemClick = (feature: string, isComingSoon?: boolean) => {
        if (isComingSoon) {
            setActiveFeature(feature);
            setToastOpen(true);
        }
    };

    return (
        <Box className="w-64 h-screen bg-slate-900 text-slate-300 flex flex-col fixed left-0 top-0 z-50">
            <Box className="p-6 flex items-center gap-3">
                <Box className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center text-white">
                    <Layers size={21} />
                </Box>
                <Typography variant="h6" className="font-bold text-white tracking-tight">
                    Admin<span className="text-blue-400">Panel</span>
                </Typography>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />

            <List className="flex-grow px-4 py-6 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton
                                onClick={() => handleItemClick(item.text, item.comingSoon)}
                                component={item.comingSoon ? 'div' : Link}
                                href={item.comingSoon ? undefined : item.path}
                                className={`rounded-xl transition-all duration-200 ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50'
                                        : 'hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <ListItemIcon className={`${isActive ? 'text-white' : 'text-slate-400'}`}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    primaryTypographyProps={{
                                        fontSize: '0.875rem',
                                        fontWeight: isActive ? 700 : 500
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Box className="p-4">
                <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 2 }} />
                <Link href="/">
                    <ListItemButton className="rounded-xl hover:bg-red-500/10 group transition-all">
                        <ListItemIcon className="text-slate-400 group-hover:text-red-400">
                            <LogOut size={20} />
                        </ListItemIcon>
                        <ListItemText
                            primary="Logout"
                            primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                            className="group-hover:text-red-400"
                        />
                    </ListItemButton>
                </Link>
            </Box>

            <ComingSoonToast
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                featureName={activeFeature}
            />
        </Box>
    );
}
