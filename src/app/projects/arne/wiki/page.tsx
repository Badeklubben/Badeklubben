import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Home = () => {
    const myCurrentPath = "/projects/arne/wiki"
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Velkommen til Min Wiki
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dette er en enkel landingsside for min wiki. Utforsk undersidene for mer informasjon.
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Link href={`/projects/arne/wiki/generell-informasjon`} >
                        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                            Generell Informasjon
                        </Button>
                    </Link>
                    <Link href={`${myCurrentPath}/undergrupper`} >
                        <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
                            Undergrupper
                        </Button>
                    </Link>
                    <Link href={`${myCurrentPath}/echo-how-to`} passHref>
                        <Button variant="contained" color="success">
                            Echo How-To
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default Home;