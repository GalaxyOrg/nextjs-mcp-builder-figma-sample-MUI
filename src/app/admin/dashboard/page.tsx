'use client';

import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    TrendingUp,
    Users,
    DollarSign,
    ShoppingCart,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        title: 'Total Revenue',
        value: '$45,231.89',
        trend: '+20.1%',
        trendUp: true,
        icon: <DollarSign className="text-emerald-600" />,
        bg: 'bg-emerald-50'
    },
    {
        title: 'Active Users',
        value: '+2350',
        trend: '+180.1%',
        trendUp: true,
        icon: <Users className="text-blue-600" />,
        bg: 'bg-blue-50'
    },
    {
        title: 'Sales',
        value: '+12,234',
        trend: '+19%',
        trendUp: true,
        icon: <ShoppingCart className="text-indigo-600" />,
        bg: 'bg-indigo-50'
    },
    {
        title: 'Churn Rate',
        value: '2.4%',
        trend: '-4%',
        trendUp: false,
        icon: <TrendingUp className="text-rose-600" />,
        bg: 'bg-rose-50'
    },
];

const recentActivities = [
    { id: 1, user: 'Alex Morgan', action: 'Purchased Premium Plan', date: '2 mins ago', status: 'Completed', amount: '$299.00' },
    { id: 2, user: 'Sarah Jenkins', action: 'New account created', date: '45 mins ago', status: 'Pending', amount: '-' },
    { id: 3, user: 'Michael Chen', action: 'Subscription renewed', date: '3 hours ago', status: 'Completed', amount: '$149.00' },
    { id: 4, user: 'Emma Wilson', action: 'Failed payment attempt', date: '5 hours ago', status: 'Failed', amount: '$49.00' },
    { id: 5, user: 'David Ross', action: 'Trial started', date: '1 day ago', status: 'Completed', amount: 'Free' },
];

export default function DashboardPage() {
    return (
        <Box>
            <Box className="mb-10">
                <Typography variant="h4" className="font-bold text-slate-900">Dashboard Overview</Typography>
                <Typography variant="body1" className="text-slate-500 mt-1">Welcome back, here's what's happening with your project today.</Typography>
            </Box>

            {/* Stats Grid */}
            <Grid container spacing={3} className="mb-10">
                {stats.map((stat, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="border-0 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <Box className="flex items-center justify-between mb-4">
                                        <Box className={`p-3 rounded-xl ${stat.bg}`}>
                                            {stat.icon}
                                        </Box>
                                        <Box className={`flex items-center gap-1 text-sm font-bold ${stat.trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                                            {stat.trend}
                                            {stat.trendUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                        </Box>
                                    </Box>
                                    <Typography variant="caption" className="text-slate-500 font-medium">{stat.title}</Typography>
                                    <Typography variant="h5" className="font-bold text-slate-900 mt-1">{stat.value}</Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {/* Activities Table */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Card className="border-0 shadow-sm rounded-2xl overflow-hidden">
                    <Box className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <Typography variant="h6" className="font-bold text-slate-900">Recent Activities</Typography>
                        <Chip label="Live Updates" color="primary" size="small" className="font-bold bg-blue-50 text-blue-600" />
                    </Box>
                    <TableContainer component={Box}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead className="bg-slate-50">
                                <TableRow>
                                    <TableCell className="font-bold text-slate-600">User</TableCell>
                                    <TableCell className="font-bold text-slate-600">Activity</TableCell>
                                    <TableCell className="font-bold text-slate-600">Date</TableCell>
                                    <TableCell className="font-bold text-slate-600">Status</TableCell>
                                    <TableCell className="font-bold text-slate-600 text-right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recentActivities.map((row) => (
                                    <TableRow key={row.id} className="hover:bg-slate-50 transition-colors">
                                        <TableCell className="font-medium text-slate-900">{row.user}</TableCell>
                                        <TableCell className="text-slate-600">{row.action}</TableCell>
                                        <TableCell className="text-slate-500 text-sm">{row.date}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={row.status}
                                                size="small"
                                                className={`font-bold ${row.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                                                    row.status === 'Pending' ? 'bg-amber-50 text-amber-600' :
                                                        'bg-rose-50 text-rose-600'
                                                    }`}
                                            />
                                        </TableCell>
                                        <TableCell className="font-bold text-slate-900 text-right">{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </motion.div>
        </Box>
    );
}
