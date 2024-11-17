interface Volunteer {
    id: string;
    name: string;
    group: string;
    start: string;
    stop: string;
    role: string;
    other_roles?: string[];

}

export default Volunteer