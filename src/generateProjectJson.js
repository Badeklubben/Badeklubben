// Scans project directories and writes public/projects.json at build time.
// Used by the all-projects page and member project pages.

const fs = require('fs');
const path = require('path');

const projectsDir = path.join(process.cwd(), 'src/app/projects');
const outputPath = path.join(process.cwd(), 'public/projects.json');

const isDir = (p) => fs.statSync(p).isDirectory();

const members = fs.readdirSync(projectsDir).filter((name) => isDir(path.join(projectsDir, name)));

const projects = {};
for (const member of members) {
    const memberDir = path.join(projectsDir, member);
    projects[member] = fs.readdirSync(memberDir).filter((name) => isDir(path.join(memberDir, name)));
}

fs.writeFileSync(outputPath, JSON.stringify({ projects }, null, 2));