'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from "next/link";
import DefaultTypography from "@/app/shared/components/DefaultTypography";

const pages = [['Badeklubben', ''], ['Stian', 'stian'], ['Lars', 'lars'], ['Arne', 'arne'], ['Gard', 'gard'], ['Oskar', 'oskar'], ['Osten', 'osten']]

function DefaultNavbar() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Box
                                key={page[1]}
                                sx={{margin: 0.3}}>
                                <Link
                                    href={"/" + page[1]}
                                    key={page[1]}
                                    style={{textDecoration: 'none'}}
                                >
                                    <DefaultTypography>
                                        {page[0]}
                                    </DefaultTypography>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default DefaultNavbar;