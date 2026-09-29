const fs = require('fs');
const path = require('path');

const src = __dirname;
const dest = path.join(__dirname, 'dist');

if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}
fs.mkdirSync(dest, { recursive: true });

function copyRecursiveSync(srcDir, destDir) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.vercel' || entry.name === 'dist') {
        continue;
      }
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursiveSync(srcPath, destPath);
    } else {
      // Only skip root-level development and config files
      if (srcDir === src) {
        if (entry.name === 'build.js' || entry.name === 'local-server.cjs' || entry.name === 'server.js') continue;
        if (entry.name === 'package.json' || entry.name === 'package-lock.json' || entry.name === 'vercel.json') continue;
      }
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursiveSync(src, dest);
console.log('Static build created successfully in dist/');
