export interface ApartmentFacts {
    timeToCenter?: string;
    timeToAirport?: string;
    timeToBeach?: string;
    features?: string[];
}

export interface ApartmentInfo {
    pros: string[];
    cons: string[];
    facts: ApartmentFacts;
}

export interface Apartment {
    id: number;
    name: string;
    link: string;
    price: number;
    guests: number;
    img: string;
    info?: ApartmentInfo;
}

// Change this string each time you swap to new apartments to start fresh votes
export const votingRound = "round-5";

export const apartments: Apartment[] = [
    {
        id: 1,
        name: "Spacious Villa",
        link: "https://www.airbnb.com/rooms/961685669302177270",
        price: 35200,
        guests: 7,
        img: "/img/ap1.jpeg",
        info: {
            pros: [
                "Stille nabolag, pool-venner sent på kvelden",
                "Stor villa med mye plass",
            ],
            cons: [
                "Soverom 2 er en sofaseng — ikke ekte seng",
                "En person sover åpent i stua",
                "15–20 min kjøring til alt ifølge gjest — trolig i åsen, ikke ved sjøen",
            ],
            facts: {
                timeToCenter: "40–50 min med bil",
                timeToAirport: "45–55 min med bil",
                timeToBeach: "15–20 min med bil ⚠️",
                features: ["Havutsikt"],
            },
        },
    },
    {
        id: 2,
        name: "Villa Luna",
        link: "https://www.airbnb.com/rooms/1036960558401027424",
        price: 45000,
        guests: 8,
        img: "/img/ap2.jpeg",
        info: {
            pros: [
                "3 ekte king size-senger — alle i egne rom",
                "4 min kjøring til nærmeste strand",
                "40 reviews, 4.7 stjerner",
                "Havutsikt",
            ],
            cons: [
                "Kun 3 senger for 7 gjester — 4 mangler plass",
                "Dyreste alternativ",
            ],
            facts: {
                timeToCenter: "57 min med bil",
                timeToAirport: "26 min med bil",
                timeToBeach: "4 min med bil (Tsonima)",
                features: ["BBQ", "Havutsikt", "Hage"],
            },
        },
    },
    {
        id: 3,
        name: "Villa Dendron",
        link: "https://www.booking.com/hotel/gr/villa-dendron.html",
        price: 28694,
        guests: 4,
        img: "/img/ap3.jpeg",
        info: {
            pros: [
                "Rett på stranden – beste strandtilgang av alle tre",
                "Mest privat – ingen eier i nærheten",
            ],
            cons: [
                "Kun 6 anmeldelser, rating 8.2",
                "Minst villa (150 kvm) for prisen",
            ],
            facts: {
                timeToCenter: "3 km til Agia Marina sentrum / ~15 min kjøring til Athen",
                timeToAirport: "~15 min kjøring (9.3 miles til ATH)",
                timeToBeach: "Rett på stranden",
                features: [
                    "3 soverom + sofa i stue",
                    "150 kvm",
                    "Sjøutsikt",
                    "Hage med skilpadder",
                ],
            },
        },
    },
    {
        id: 4,
        name: "Bellevia Stone Pool Villa",
        link: "https://www.airbnb.com/rooms/1446450441110644160",
        price: 45095,
        guests: 7,
        img: "/img/ap4.jpeg",
        info: {
            pros: [
                "Mest unikt – gammel steinvilla med 5-stjerners interiør",
                "To separate boliger – naturlig privatliv internt i gruppen",
            ],
            cons: [
                "Ferje obligatorisk (~1,5t reise hver vei)",
                "Kun 1 anmeldelse",
            ],
            facts: {
                timeToCenter: "~1t kjøring + 30 min ferje til Athen",
                timeToAirport: "~1t kjøring + 30 min ferje til ATH",
                timeToBeach: "Under 2 km / ~5 min kjøring",
                features: [
                    "3 soverom + sofa i stue",
                    "135 kvm (to boliger)",
                    "Panoramautsikt og solnedgang",
                    "Peis",
                ],
            },
        },
    },
    {
        id: 5,
        name: "Villa Selene",
        link: "https://www.airbnb.com/rooms/679607861111645623",
        price: 45585,
        guests: 7,
        img: "/img/ap5.jpeg",
        info: {
            pros: [
                "Beste anmeldelser: 5.0/5 fra 7 gjester, Guest Favourite",
                "50 kvm basseng + stor hage – beste uteareal",
            ],
            cons: [
                "Eier bor i den andre halvvillaen",
                "Strand kun med bil (2 min kjøring)",
            ],
            facts: {
                timeToCenter: "~42 km / ~45 min kjøring til Akropolis",
                timeToAirport: "~30 km / ~25 min kjøring til ATH",
                timeToBeach: "2 min kjøring",
                features: [
                    "5 soverom + sofa i soverom 5",
                    "350 kvm over 4 etasjer",
                    "50 kvm basseng",
                    "Jacuzzi",
                ],
            },
        },
    },
]
