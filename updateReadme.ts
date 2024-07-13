// updateReadme.ts
import fs from 'fs';
import fetchApod from './fetchApod';

async function updateReadme() {
    const apodData = await fetchApod();
    if (!apodData) return;

    const readmeContent = `# NASA Astronomy Picture of the Day\n\n${apodData.title}\n\n${apodData.explanation}\n\n![APOD Image](${apodData.url})`;

    fs.writeFileSync('README.md', readmeContent);
    console.log('README.md updated successfully.');
}

updateReadme();
