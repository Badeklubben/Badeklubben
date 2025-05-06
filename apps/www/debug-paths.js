const path = require("path");
const { compilerOptions } = require("./tsconfig.json");

// Get the baseUrl from tsconfig
const baseUrl = compilerOptions.baseUrl || ".";

// Get the paths configuration
const paths = compilerOptions.paths || {};

// If @ is defined, show where it points to
if (paths["@/*"]) {
  const atAlias = paths["@/*"][0].replace("*", "");
  const resolvedPath = path.resolve(baseUrl, atAlias);
  console.log("The @/ alias resolves to:", resolvedPath);
} else {
  console.log("No @/* alias found in tsconfig.json");
}

// Log other relevant path info
console.log("\nOther useful paths:");
console.log("Current directory:", process.cwd());
console.log("BaseUrl resolved:", path.resolve(baseUrl));
console.log("All configured paths:", paths);
