import React, { useEffect, useState } from 'react';
import {Box} from "@mui/material"
import DefaultTypography from "@/app/shared/components/DefaultTypography";
const BikeInfo: React.FC = () => {
    const [results, setResults] = useState<Array<[number, string]>>([]);
    const [isBike, setIsBike] = useState<boolean>(false);

    const urlStatus = 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json';
    const urlInfo = 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const infoResponse = await fetch(urlInfo);
                const infoData = await infoResponse.json();

                const statusResponse = await fetch(urlStatus);
                const statusData = await statusResponse.json();

                const stationsInfo = infoData.data.stations;
                const nameId: { [key: string]: string } = {};
                stationsInfo.forEach((station: any) => {
                    nameId[station.station_id] = station.name;
                });

                const response = statusData.data.stations;
                const newResults: Array<[number, string]> = [];
                response.forEach((station: any) => {
                    if (!newResults.some(row => row.includes(nameId[station.station_id]))) {
                        newResults.push([station.num_bikes_available, nameId[station.station_id]]);
                    }
                });

                setResults(newResults);
            } catch (e) {
                console.error("Error fetching data: ", e);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const sizeSort = () => {
            let myCopyResults = [...results];
            myCopyResults.sort((a, b) => {
                if (a[1] === "Høyteknologisenteret" || a[1] === "Florida Bybanestopp") {
                    setIsBike(true);
                }
                return b[0] - a[0];
            });

            setResults(myCopyResults);
        };

        sizeSort();
    }, [results]);

    return (
        <Box>
            {isBike && <p> Det er ledig sykkel utenfor Høytek!</p>}
            <br/>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>Det er {result[0]} ledige sykler på {result[1]}</li>
                ))}
            </ul>
        </Box>
    );
};

export default BikeInfo;