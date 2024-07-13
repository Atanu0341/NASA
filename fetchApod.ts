// fetchApod.ts
import axios from 'axios';

async function fetchApod() {
    const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching APOD:', error);
        return null;
    }
}

export default fetchApod;
