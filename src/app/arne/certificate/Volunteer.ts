interface ExtraRole {
    groupName: string;
    startDate: string;
    endDate: string;
    role: string;
}

interface Volunteer {
    id: string;
    name: string;
    group: string;
    startDate: string;
    endDate: string;
    role: string;
    extra_roles?: ExtraRole[];
}

export default Volunteer