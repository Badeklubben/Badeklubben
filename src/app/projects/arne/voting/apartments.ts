export interface Apartment {
    id: number;
    name: string;
    link: string;
    price: number;
    beds: number;
    img: string;
}

// Change this string each time you swap to new apartments to start fresh votes
export const votingRound = "round-3";

export const apartments: Apartment[] = [
    {
        id: 0,
        name: "a",
        link: "https://www.airbnb.com/rooms/677354773913839318?adults=6&check_in=2026-07-31&check_out=2026-08-07&search_mode=regular_search&amenities%5B%5D=7&source_impression_id=p3_1774997374_P3zZs-2grA4JUaru&previous_page_section_name=1001&federated_search_id=a1e97ae7-2c60-427e-8ef2-5ffa5c087a69&scroll_to_review=1180975693596130319",
        price: 23500,
        beds: 6,
        img: "/img/ap1"
    }
]
