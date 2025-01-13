export interface ExtraRole {
    groupName: string;
    startDate: string;
    endDate: string;
    role: string;
}

export interface Volunteer {
    id: string;
    personName: string;
    groupName: string;
    startDate: string;
    endDate: string;
    role: string;
    extraRole?: ExtraRole[];
}

