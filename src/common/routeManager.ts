"use server"

export default async function getSubRoutes(basePath: string) {
    const fs = require('fs');
    const path = require('path');
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
        }).filter((file:string) => file !== null);

        return subRoutes;
    } catch (error) {
        console.error("Error reading directory:", error);
        return [];
    }
}