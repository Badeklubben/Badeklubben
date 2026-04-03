'use client'
import DefaultDrawer from "@/app/shared/components/DefaultDrawer";
import React from "react";
import BikeInfo from "@/app/projects/arne/bysykkel/BikeInfo";

export default function CityBike() {
    return (
        <div>
            <DefaultDrawer/>
            <div className="max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6">Bysykkel</h1>
                <BikeInfo/>
            </div>
        </div>
    );
}
