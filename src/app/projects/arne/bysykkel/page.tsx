'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box"
import DefaultTypography from "@/app/shared/components/DefaultTypography";

export default function CityBike() {
    return (
        <Box>
            <DefaultDrawer></DefaultDrawer>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Velkommen til Arne sin side!</DefaultTypography>


        </Box>
    );
}