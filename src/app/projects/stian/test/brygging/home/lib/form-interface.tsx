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
    uid: "",
};
