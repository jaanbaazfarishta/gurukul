import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function AdminDashboard() {
    const session = await auth();
    const adminEmail = process.env.ADMIN_EMAIL; // Environment variable se admin email le rahe hain

    if (!session || session.user?.email !== adminEmail) {
        redirect('/'); // Agar session nahi hai ya email match nahi karti to home page par bhej do
    }

    return (
        <div className=''></div>
    );
}
