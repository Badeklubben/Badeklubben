'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import React from "react";
import DefaultTypography from "@/app/shared/components/DefaultTypography";
import BikeInfo from "@/app/projects/arne/bysykkel/BikeInfo";

export default function CityBike() {
    return (
        <div>
            <DefaultDrawer></DefaultDrawer>
            <DefaultTypography fontWeight={700} colorText={"#000"}>Sjekk om bysykkel er tilgjengelig</DefaultTypography>
            <BikeInfo />
        </div>
    );
}
