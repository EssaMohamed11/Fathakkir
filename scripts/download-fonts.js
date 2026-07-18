import fs from 'fs';
import path from 'path';
import https from 'https';

const FONTS_DIR = path.resolve('src/assets/fonts');
const SCRIPTS_DIR = path.resolve('scripts');

// Ensure directories exist
if (!fs.existsSync(FONTS_DIR)) {
  fs.mkdirSync(FONTS_DIR, { recursive: true });
}

const fontsUrl = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&family=Tajawal:wght@300;400;500;700;900&family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Naskh+Arabic:wght@400;500;600;700&display=swap';
const iconsUrl = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadBinary(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, { headers: { 'User-Agent': USER_AGENT } }, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function processCss(cssContent, label) {
  const urlRegex = /url\((https:\/\/[^)]+)\)/g;
  let match;
  let modifiedCss = cssContent;
  let count = 0;

  console.log(`Processing fonts/icons for: ${label}`);
  
  // Collect all unique URLs
  const urls = [];
  while ((match = urlRegex.exec(cssContent)) !== null) {
    if (!urls.includes(match[1])) {
      urls.push(match[1]);
    }
  }

  console.log(`Found ${urls.length} font files to download.`);

  for (const fontUrl of urls) {
    count++;
    const ext = path.extname(new URL(fontUrl).pathname) || '.woff2';
    const filename = `${label}-${count}${ext}`;
    const destPath = path.join(FONTS_DIR, filename);

    console.log(`Downloading [${count}/${urls.length}]: ${filename}`);
    try {
      await downloadBinary(fontUrl, destPath);
      // Replace in CSS
      modifiedCss = modifiedCss.replaceAll(fontUrl, `./${filename}`);
    } catch (err) {
      console.error(`Failed to download ${fontUrl}:`, err.message);
    }
  }

  return modifiedCss;
}

async function run() {
  try {
    console.log('Fetching Google Fonts CSS...');
    const fontsCss = await fetchUrl(fontsUrl);
    const localFontsCss = await processCss(fontsCss, 'font');

    console.log('Fetching Material Icons CSS...');
    const iconsCss = await fetchUrl(iconsUrl);
    const localIconsCss = await processCss(iconsCss, 'icon');

    // Combine CSS files
    const finalCss = `/* Locally hosted fonts and icons for Fathakkir offline mode */\n\n${localFontsCss}\n\n${localIconsCss}`;
    fs.writeFileSync(path.join(FONTS_DIR, 'fonts.css'), finalCss, 'utf-8');
    
    console.log('Successfully downloaded all fonts & icons locally! CSS generated at src/assets/fonts/fonts.css');
  } catch (err) {
    console.error('Error during font downloading process:', err);
  }
}

run();
