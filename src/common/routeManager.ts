"use server"

import fs from "fs";
import path from "path";



export default async function getSubRoutes(basePath: string) {

    const directoryPath = path.join(process.cwd(), 'src\\app', basePath);

    try {
        const files = fs.readdirSync(directoryPath);

        const subRoutes = files
        .map((file:string) => {
            const filePath = path.join(directoryPath, file);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                const pageFilePath = path.join(filePath, 'page.tsx');
                if (fs.existsSync(pageFilePath)) return `${file}`;
            }
            return null
        }).filter((file:string|null) => file !== null);

        return subRoutes as string[];
    } catch (error) {
        console.error("Error reading directory:", error);
        return [];
    }
}