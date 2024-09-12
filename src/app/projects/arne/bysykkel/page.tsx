'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box"
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import BikeInfo from "@/app/projects/arne/bysykkel/BikeInfo";

export default function CityBike() {
    return (
        <Box>
            <DefaultDrawer></DefaultDrawer>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Sjekk om bysykkel er tilgjengelig</DefaultTypography>
            <BikeInfo />
        </Box>
    );
}