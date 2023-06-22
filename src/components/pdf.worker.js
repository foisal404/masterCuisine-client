import path from 'node:path';
import fs from 'node:fs';

const cMapsDir = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');

function copyDir(from, to) {
  // Ensure target directory exists
  fs.mkdirSync(to, { recursive: true });

  const files = fs.readdirSync(from);
  files.forEach((file) => {
    fs.copyFileSync(path.join(from, file), path.join(to, file));
  });
}

copyDir(cMapsDir, 'dist/cmaps/');