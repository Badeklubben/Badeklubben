'use client'
import React, {useEffect, useState} from 'react';

interface StationData {
    name: string;
    bikes: number;
}

const cities = {
    bergen: {
        label: 'Bergen',
        statusUrl: 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_status.json',
        infoUrl: 'https://gbfs.urbansharing.com/bergenbysykkel.no/station_information.json',
    },
    oslo: {
        label: 'Oslo',
        statusUrl: 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json',
        infoUrl: 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json',
    },
} as const;

type CityKey = keyof typeof cities;

const headers = {'Client-Identifier': 'badeklubben-bysykkel'};

function bikesColor(count: number): string {
    if (count === 0) return 'text-gray-400';
    if (count <= 2) return 'text-red-500';
    if (count <= 5) return 'text-yellow-600';
    return 'text-green-600';
}

function bikesBg(count: number): string {
    if (count === 0) return 'bg-gray-50';
    if (count <= 2) return 'bg-red-50';
    if (count <= 5) return 'bg-yellow-50';
    return 'bg-green-50';
}

export default function BikeInfo() {
    const [city, setCity] = useState<CityKey>('bergen');
    const [stations, setStations] = useState<StationData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async (cityKey: CityKey) => {
        setLoading(true);
        setError(null);
        setStations([]);

        const config = cities[cityKey];
        try {
            const [infoRes, statusRes] = await Promise.all([
                fetch(config.infoUrl, {headers}),
                fetch(config.statusUrl, {headers}),
            ]);

            if (!infoRes.ok || !statusRes.ok) {
                setError(`Kunne ikke hente data (${infoRes.status}/${statusRes.status}). Prøv igjen.`);
                setLoading(false);
                return;
            }

            const infoData = await infoRes.json();
            const statusData = await statusRes.json();

            const nameMap: Record<string, string> = {};
            infoData.data.stations.forEach((s: any) => {
                nameMap[s.station_id] = s.name;
            });

            const results: StationData[] = [];
            const seen = new Set<string>();
            statusData.data.stations.forEach((s: any) => {
                const name = nameMap[s.station_id];
                if (name && !seen.has(name)) {
                    seen.add(name);
                    results.push({name, bikes: s.num_bikes_available});
                }
            });

            results.sort((a, b) => b.bikes - a.bikes);
            setStations(results);
        } catch (e) {
            setError('Nettverksfeil. Sjekk tilkoblingen din og prøv igjen.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(city);
    }, [city]);

    const totalBikes = stations.reduce((sum, s) => sum + s.bikes, 0);

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                {(Object.keys(cities) as CityKey[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => setCity(key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            city === key
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                    >
                        {cities[key].label}
                    </button>
                ))}
            </div>

            {!loading && !error && stations.length > 0 && (
                <p className="text-sm text-gray-500">
                    {totalBikes} sykler tilgjengelig på {stations.length} stasjoner
                </p>
            )}

            {loading && (
                <div className="space-y-2">
                    {Array.from({length: 8}, (_, i) => (
                        <div key={i} className="h-10 bg-gray-100 rounded-lg animate-pulse"/>
                    ))}
                </div>
            )}

            {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                    <p>{error}</p>
                    <button
                        onClick={() => fetchData(city)}
                        className="mt-2 text-red-600 underline hover:text-red-800"
                    >
                        Prøv igjen
                    </button>
                </div>
            )}

            {!loading && !error && stations.length === 0 && (
                <p className="text-sm text-gray-500">Ingen stasjoner funnet.</p>
            )}

            {!loading && !error && stations.length > 0 && (
                <div className="space-y-1">
                    {stations.map((station) => (
                        <div
                            key={station.name}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg ${bikesBg(station.bikes)}`}
                        >
                            <span className="text-sm">{station.name}</span>
                            <span className={`text-sm font-semibold tabular-nums ${bikesColor(station.bikes)}`}>
                                {station.bikes} {station.bikes === 1 ? 'sykkel' : 'sykler'}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
