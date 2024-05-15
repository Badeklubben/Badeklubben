'use client'
import DefaultNavbar from "@/app/shared/components/DefaultNavbar";
import React from "react";
import Box from "@mui/material/Box"
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import VolunteerForm from "@/app/arne/certificate/VolunteerForm";

export default function Arne() {
    return (
        <Box>
            <DefaultNavbar/>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Certificate</DefaultTypography>
            <VolunteerForm></VolunteerForm>
        </Box>
    );
}