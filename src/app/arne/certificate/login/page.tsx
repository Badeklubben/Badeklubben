'use client'
import React, {useState} from 'react';
import {login, logout, useAuth} from '../auth';
import {Button, Container, Typography, TextField, Box} from '@mui/material';
import AdminPage from "@/app/arne/certificate/login/AdminPage";
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const currentUser = useAuth();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            console.error('Login failed:', error);
            alert('Innlogging mislyktes: ' + (error as Error).message);
        }
    };

    const handleLogout = async () => {
        await logout();
    };

    if (currentUser) {
        return (
            <>
                <DefaultNavbar></DefaultNavbar>
                <Container component="main">
                    <Typography component="h1" variant="h4" sx={{mt: 4, mb: 2}}>
                        Admin Panel
                    </Typography>
                    <Typography variant="h6">
                        Velkommen, {currentUser.email}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleLogout}
                        sx={{mt: 1, mb: 1}}
                    >
                        Logg Ut
                    </Button>

                    <AdminPage></AdminPage>
                </Container>
            </>
        );
    }

    return (
        <>
            <DefaultNavbar></DefaultNavbar>
            <Container component="main">

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Logg Inn
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} sx={{mt: 1}}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="E-post"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Passord"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Logg Inn
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default LoginPage;