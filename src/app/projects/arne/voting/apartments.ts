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
export const votingRound = "round-4";

export const apartments: Apartment[] = [
    {
        id: 1,
        name: "a",
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
        name: "b",
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
        name: "c",
        link: "https://www.airbnb.com/rooms/50666941",
        price: 39000,
        guests: 9,
        img: "/img/ap3.jpeg",
        info: {
            pros: [
                "Beachfront — direkte strandtilgang",
            ],
            cons: [
                "Ligger på Salamina — en øy, krever bilferje",
                "~60 min til Athen sentrum (bil + ferje)",
                "Kun 5 anmeldelser — lite track record",
            ],
            facts: {
                timeToCenter: "~60 min (bil + ferje)",
                timeToAirport: "~75 min (bil + ferje)",
                timeToBeach: "Direkte — beachfront",
                features: ["Beachfront", "Peis"],
            },
        },
    },
]
