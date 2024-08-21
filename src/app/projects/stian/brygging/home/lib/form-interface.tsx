export interface BryggeskjemaDocument {
    id: string;
    abv: number;
    "batch-navn": string;
    "batch-nr": number;
    bryggedato: { seconds: number; nanoseconds: number };
    effektivitet: number;
    "forventet-fg": number;
    "forventet-og": number;
    "målt-fg": number;
    "målt-og": number;
    tappedato: { seconds: number; nanoseconds: number };
    forbredelser: {
        vannmengde: boolean;
        regjoring: boolean;
        ingredienser: boolean;
        desinfiser: boolean;
        meskevann: boolean;
    };
    mesking: {
        meskevannL: number;
        skyllevann: number;
        mesketemp: number;
        mesketid: number;
        temp: boolean;
        malt: boolean;
        stir: boolean;
        skylle: boolean;
        meskOgSkyll: boolean;
    };
    koking: {
        tid: number;
        liter: number;
        start: string;
        humle: boolean;
        klarning: boolean;
        spiralkjøler: boolean;
    };
    kjoling: {
        kjolt: boolean;
        måltOG: boolean;
    };
    gjæring: {
        OksygenertVørter: boolean;
        tilsatt: boolean;
        tilsettninger: boolean;
        temp: boolean;
        liter: number;
    };
    uid: string;
}

export const defaultForm: BryggeskjemaDocument = {
    id: "",
    abv: 0,
    "batch-navn": "",
    "batch-nr": 0,
    bryggedato: { seconds: 0, nanoseconds: 0 },
    effektivitet: 0,
    "forventet-fg": 0,
    "forventet-og": 0,
    "målt-fg": 0,
    "målt-og": 0,
    tappedato: { seconds: 0, nanoseconds: 0 },
    forbredelser: {
        vannmengde: false,
        regjoring: false,
        ingredienser: false,
        desinfiser: false,
        meskevann: false,
    },
    mesking: {
        meskevannL: 0,
        skyllevann: 0,
        mesketemp: 0,
        mesketid: 0,
        temp: false,
        malt: false,
        stir: false,
        skylle: false,
        meskOgSkyll: false,
    },
    koking: {
        tid: 0,
        liter: 0,
        start: "",
        humle: false,
        klarning: false,
        spiralkjøler: false,
    },
    kjoling: {
        kjolt: false,
        måltOG: false,
    },
    gjæring: {
        OksygenertVørter: false,
        tilsatt: false,
        tilsettninger: false,
        temp: false,
        liter: 0,
    },
    uid: "",
};
