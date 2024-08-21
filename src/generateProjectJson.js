
//lagrar path til alle sine prosjekter on build

const fs = require('fs');
const path = require('path');

var directoryPath = path.join(process.cwd(), 'src/app/projects');
const outputPath = path.join(process.cwd(), 'public/projects.json');

var items = fs.readdirSync(directoryPath);
const members = items.filter((item) => {
  const itemPath = path.join(directoryPath, item);
  return fs.statSync(itemPath).isDirectory();
});

var projects = {};

members.map((member) => {
    directoryPath = path.join(process.cwd(), 'src/app/projects/' + member);
    items = fs.readdirSync(directoryPath);
    projects[member] = items.filter((item) => {
        const itemPath = path.join(directoryPath, item);
        return fs.statSync(itemPath).isDirectory();
      });
});


fs.writeFileSync(outputPath, JSON.stringify({ projects }));