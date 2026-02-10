import Sidebar from '@/components/layout/admin/Sidebar';
import TopBar from '@/components/layout/admin/TopBar';
import { Box } from '@mui/material';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Box className="flex min-h-screen bg-slate-50">
            <Sidebar />
            <Box className="flex-grow flex flex-col ml-64">
                <TopBar />
                <Box component="main" className="p-8 flex-grow">
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
