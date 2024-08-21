"use client"

import { capitalize } from "@/common/tools";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Meg() {
    
    const path = usePathname();
    const id = path.split('/').at(2)!;

    function get_paths() {
        switch (id) {
            case 'arne':
                return ['city_bike','echo_color','phone_number','voting']
            case 'lars':
                return ['grapher']
            case 'stian':
                return ['brygging', 'lotteri']
            case 'oskar':
                return ['test']
            case 'gard':
                return ['test']
            case 'osten':
                return ['test']
            default:
                return null
        }
    }
    const paths : string[] | null = get_paths();

    return (
        paths ? paths.map(my_path => {
            return <Link key={id + my_path} href={'/projects/' + id + '/' + my_path}>{capitalize(my_path)}</Link>
        }) : "Not a valid member"
    );
}