export interface BryggeskjemaDocument {
    id: string;
    abv: number;
    'batch-navn': string;
    'batch-nr': number;
    bryggedato: { seconds: number, nanoseconds: number };
    effektivitet: number;
    'forventet-fg': number;
    'forventet-og': number;
    'målt-fg': number;
    'målt-og': number;
    tappedato: { seconds: number, nanoseconds: number };
  }
  