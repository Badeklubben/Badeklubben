'use client'
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box"
import DefaultTypography from "@/app/shared/components/DefaultTypography";

export default function CityBike() {
    return (
        <Box>
            <DefaultNavbar></DefaultNavbar>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Velkommen til Arne sin side!</DefaultTypography>


        </Box>
    );
}