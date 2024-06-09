'use client'
import React from 'react';
import Typography from '@mui/material/Typography';

interface DefaultTypographyProps {
    children: React.ReactNode;
    href?: string;
    colorText?: string;
    fontWeight?: number;
}

const DefaultTypography: React.FC<DefaultTypographyProps> = (
    { children, href, colorText = "white", fontWeight = 400  }) => {
    return (
        <Typography
            variant= "h5"
            noWrap
            component={href ? 'a' : 'span'}
            href={href}
            sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: fontWeight,
                letterSpacing: '.1rem',
                color: colorText,
            }}
        >
            {children}
        </Typography>
    );
};

export default DefaultTypography;
