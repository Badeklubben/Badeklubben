import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const GenerellInformasjon = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Generell Informasjon
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dette er siden for generell informasjon. Her finner du ulike generelle opplysninger.
                </Typography>
                <Link href="/">Tilbake til landingssiden</Link>
            </Box>
        </Container>
    );
};

export default GenerellInformasjon;