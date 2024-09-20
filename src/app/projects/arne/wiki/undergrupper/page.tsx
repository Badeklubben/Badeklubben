import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const Undergrupper = () => {
    const myCurrentPath = "/projects/arne/wiki/undergrupper"
    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Undergrupper
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Dette er siden for undergrupper. Velg en gruppe for å se mer informasjon.
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Link href={`${myCurrentPath}/gruppe1`} passHref>
                        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                            Webkom
                        </Button>
                    </Link>
                    <Link href={`${myCurrentPath}/gruppe2`} passHref>
                        <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
                            KomWeb
                        </Button>
                    </Link>
                    <Link href={`${myCurrentPath}/gruppe3`} passHref>
                        <Button variant="contained" color="success">
                            DotKom
                        </Button>
                    </Link>
                </Box>

            </Box>
        </Container>
    );
};

export default Undergrupper;