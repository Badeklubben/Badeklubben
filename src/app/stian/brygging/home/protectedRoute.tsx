'use client'
import { useAuth } from '../lib/authentication';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	const { user } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!user.uid) {
			router.replace('/stian/brygging');
		} else {
			setLoading(false)
		}
	}, [router, user]);

	if (loading) return <div>Loading...</div>;

    return <div>{user && children}</div>;
};

export default ProtectedRoute;
