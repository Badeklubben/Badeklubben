export interface Apartment {
    id: number;
    name: string;
    link: string;
    price: number;
    beds: number;
    img: string;
}

// Change this string each time you swap to new apartments to start fresh votes
export const votingRound = "round-2";

export const apartments: Apartment[] = [
    {
        id: 0,
        name: "a",
        link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=300229923",
        price: 41519,
        beds: 11,
        img: "/img/ap1"
    },
    {
        id: 1,
        name: "b",
        link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=300375762&ci=2",
        price: 46140,
        beds: 12,
        img: "/img/ap2"
    },
    {
        id: 2,
        name: "c",
        link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=300346121&ci=37",
        price: 57000,
        beds: 12,
        img: "/img/ap3"

    },
    {
        id: 3,
        name: "d",
        link: "https://www.finn.no/reise/feriehus-hytteutleie/ad.html?finnkode=303523567&ci=21",
        price: 28769,
        beds: 12,
        img: "/img/ap4"
    }
]
