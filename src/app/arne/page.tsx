'use client'
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";
import Link from "next/link";
import React from "react";
import Box from "@mui/material/Box"
import DefaultTypography from "@/app/shared/components/DefaultTypography";

export default function Arne() {
    return (
        <Box>
            <DefaultNavbar/>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Velkommen til Arne sin side!</DefaultTypography>
            <br/>
            <Link href={"/arne/city_bike"}>
                <DefaultTypography fontWeight={700} colorText={"#000"}>Bysykkel oversikt!</DefaultTypography>
            </Link>
            <br/>
            <Link href={"/arne/echo_color"}>
                <DefaultTypography fontWeight={700} colorText={"#000"}>Fargene til echo! </DefaultTypography>
            </Link>
            <br/>
            <Link href={"/arne/phone_number"}>
                <DefaultTypography fontWeight={700} colorText={"#000"}>
                    Velg telefonnummer!
                </DefaultTypography>
            </Link>
            <br/>
            <Link href={"/arne/voting"}>
                <DefaultTypography fontWeight={700} colorText={"#000"}>Stem på leilighet</DefaultTypography>
            </Link>
            <br/>
            <Link href={"/arne/fb_test"}>
                <DefaultTypography fontWeight={700} colorText={"#000"}>Test firebase!</DefaultTypography>
            </Link>


        </Box>
    );
}