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

const COOKIE_FAVORITES = 'bysykkel_favorites';
const COOKIE_CITY = 'bysykkel_city';

function getCookie(name: string): string | null {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function setCookie(name: string, value: string) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${60 * 60 * 24 * 365}`;
}

function loadFavorites(): Set<string> {
    const raw = getCookie(COOKIE_FAVORITES);
    if (!raw) return new Set();
    try { return new Set(JSON.parse(raw)); } catch { return new Set(); }
}

function saveFavorites(favs: Set<string>) {
    setCookie(COOKIE_FAVORITES, JSON.stringify([...favs]));
}

function bikesColor(count: number): string {
    if (count === 0) return 'text-gray-400';
    if (count <= 2) return 'text-red-500';
    if (count <= 5) return 'text-yellow-600';
    return 'text-green-600';
}

function bikesBg(count: number, isFav: boolean): string {
    if (isFav) return 'bg-blue-50';
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
    const [favorites, setFavorites] = useState<Set<string>>(new Set());

    useEffect(() => {
        setFavorites(loadFavorites());
        const savedCity = getCookie(COOKIE_CITY) as CityKey | null;
        if (savedCity && savedCity in cities) setCity(savedCity);
    }, []);

    const handleCityChange = (key: CityKey) => {
        setCity(key);
        setCookie(COOKIE_CITY, key);
    };

    const toggleFavorite = (name: string) => {
        setFavorites(prev => {
            const next = new Set(prev);
            if (next.has(name)) next.delete(name);
            else next.add(name);
            saveFavorites(next);
            return next;
        });
    };

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

    const favoriteStations = stations.filter(s => favorites.has(s.name));
    const otherStations = stations.filter(s => !favorites.has(s.name));

    return (
        <div className="space-y-4">
            <div className="flex gap-2">
                {(Object.keys(cities) as CityKey[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => handleCityChange(key)}
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
                    {favoriteStations.map((station) => (
                        <StationRow key={station.name} station={station} isFav={true} onToggle={toggleFavorite}/>
                    ))}
                    {favoriteStations.length > 0 && otherStations.length > 0 && (
                        <div className="border-t border-gray-200 my-2"/>
                    )}
                    {otherStations.map((station) => (
                        <StationRow key={station.name} station={station} isFav={false} onToggle={toggleFavorite}/>
                    ))}
                </div>
            )}
        </div>
    );
}

function StationRow({station, isFav, onToggle}: { station: StationData; isFav: boolean; onToggle: (name: string) => void }) {
    return (
        <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${bikesBg(station.bikes, isFav)}`}>
            <button
                onClick={() => onToggle(station.name)}
                className="text-base shrink-0"
                title={isFav ? 'Fjern favoritt' : 'Legg til favoritt'}
            >
                {isFav ? '★' : '☆'}
            </button>
            <span className="text-sm flex-1">{station.name}</span>
            <span className={`text-sm font-semibold tabular-nums ${bikesColor(station.bikes)}`}>
                {station.bikes} {station.bikes === 1 ? 'sykkel' : 'sykler'}
            </span>
        </div>
    );
}
