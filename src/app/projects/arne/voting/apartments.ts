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
                "Pool",
                "Stor villa med mye plass",
                "Billigste alternativ",
            ],
            cons: [
                "Soverom 2 er en sofaseng",
                "En person sover i stua",
                "Trolig i åsen — vanskelig uten bil",
            ],
            facts: {
                timeToCenter: "~45 min med bil",
                timeToAirport: "~50 min med bil",
                timeToBeach: "~20 min med bil ⚠️ Ukjent gangavstand",
            },
        },
    },
    {
        id: 2,
        name: "Villa Luna",
        link: "https://www.airbnb.com/rooms/50666941",
        price: 45000,
        guests: 8,
        img: "/img/ap2.jpeg",
        info: {
            pros: [
                "3 king size-senger i egne rom",
                "40 reviews, 4.7 stjerner",
            ],
            cons: [
                "Kun 3 senger for 7 gjester — 4 mangler sengeplass",
                "Strand ~15–20 min gange (usikkert)",
            ],
            facts: {
                timeToCenter: "~55 min med bil",
                timeToAirport: "~25 min med bil",
                timeToBeach: "~4 min med bil / ~15–20 min gange (estimat)",
            },
        },
    },
    {
        id: 3,
        name: "Villa Dendron",
        link: "https://www.booking.com/hotel/gr/villa-dendron.html",
        price: 28694,
        guests: 8,
        img: "/img/ap3.jpg",
        info: {
            pros: [
                "~14 min gange til Lombarda Beach",
                "Mest privat — ingen eier i nærheten",
                "Billigst + nærmest strand av alle",
            ],
            cons: [
                "Kun 6 anmeldelser (8.2)",
                "Minst villa (150 kvm)",
                "4. seng er sofaseng i stua",
            ],
            facts: {
                timeToCenter: "~15 min med bil",
                timeToAirport: "~15 min med bil",
                timeToBeach: "~14 min gange (Lombarda Beach)",
                features: [
                    "3 soverom + sofa i stue",
                    "150 kvm",
                ],
            },
        },
    },
    {
        id: 4,
        name: "Bellevia Stone Pool Villa",
        link: "https://www.airbnb.com/rooms/1446450441110644160",
        price: 45095,
        guests: 8,
        img: "/img/ap4.jpeg",
        info: {
            pros: [
                "Unik gammel steinvilla",
                "To separate boliger — privatliv i gruppen",
            ],
            cons: [
                "Ferje obligatorisk (~1,5t hver vei)",
                "Kun 1 anmeldelse",
                "Strand ~20–30 min gange (kupert terreng, Evia)",
            ],
            facts: {
                timeToCenter: "~1,5t (bil + ferje)",
                timeToAirport: "~1,5t (bil + ferje)",
                timeToBeach: "~20–30 min gange (estimat, kupert)",
                features: [
                    "3 soverom + sofa i stue",
                    "135 kvm (to boliger)",
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
        guests: 10,
        img: "/img/ap5.jpg",
        info: {
            pros: [
                "5.0/5 fra 7 gjester, Guest Favourite",
                "50 kvm basseng + stor hage",
                "5 soverom — mest plass av alle",
            ],
            cons: [
                "Eier bor i nabodelen",
                "Strand ~10–15 min gange (Palea Fokea)",
            ],
            facts: {
                timeToCenter: "~45 min med bil",
                timeToAirport: "~25 min med bil",
                timeToBeach: "~10–15 min gange (estimat)",
                features: [
                    "5 soverom",
                    "350 kvm over 4 etasjer",
                    "50 kvm basseng",
                    "Jacuzzi",
                ],
            },
        },
    },
]
