import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const Gruppe1 = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Gruppe 1
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dette er siden for Gruppe 1. Her finner du informasjon relatert til denne gruppen.
                </Typography>
            </Box>
        </Container>
    );
};

export default Gruppe1;