// tailwind-watch.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const srcDir = './src';
const command = 'npx tailwindcss -i ./src/index.css -o ./public/output.css';

console.log('👀 Watching for CSS changes...');

// Run once initially
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`✅ Initial build complete: ${stdout}`);
});

// Watch for changes
fs.watch(srcDir, { recursive: true }, (eventType, filename) => {
  if (filename && (filename.endsWith('.css') || filename.endsWith('.jsx'))) {
    console.log(`🔄 File changed: ${filename}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(`✅ Rebuild complete: ${stdout}`);
    });
  }
});

console.log('Press Ctrl+C to stop watching'); 