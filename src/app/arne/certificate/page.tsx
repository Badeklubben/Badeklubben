'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import React from "react";
import Box from "@mui/material/Box"
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import VolunteerForm from "@/app/arne/certificate/VolunteerForm";

export default function Arne() {
    return (
        <Box>
            <DefaultDrawer/>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Certificate</DefaultTypography>
            <VolunteerForm></VolunteerForm>
        </Box>
    );
}