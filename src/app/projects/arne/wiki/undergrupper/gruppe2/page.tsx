import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const Gruppe2 = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Gruppe 2
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dette er siden for Gruppe 2. Her finner du informasjon relatert til denne gruppen.
                </Typography>
            </Box>
        </Container>
    );
};

export default Gruppe2;