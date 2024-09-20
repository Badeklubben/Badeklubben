import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const EchoHowTo = () => {
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Echo How-To
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dette er siden for Echo How-To. Her finner du veiledninger og instruksjoner.
                </Typography>
                <Link href="/">Tilbake til landingssiden</Link>
            </Box>
        </Container>
    );
};

export default EchoHowTo;