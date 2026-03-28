'use client';

import { ReactNode } from 'react';

export default function DefaultTypography({
    children,
    fontWeight = 400,
    colorText = '#000',
}: {
    children: ReactNode;
    fontWeight?: number;
    colorText?: string;
}) {
    return (
        <p style={{ fontWeight, color: colorText, fontFamily: 'monospace', letterSpacing: '0.1rem' }}>
            {children}
        </p>
    );
}
