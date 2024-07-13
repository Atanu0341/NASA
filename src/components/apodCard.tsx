'use client'

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ApodData {
    date: string;
    explanation: string;
    hdurl: string;
    title: string;
}

const ApodCard = () => {
    const [apodData, setApodData] = useState<ApodData | null>(null);
    const api_key = process.env.NEXT_PUBLIC_NASA_API_KEY; // Access environment variable

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
                setApodData(response.data);
            } catch (error) {
                console.error('Error fetching APOD:', error);
            }
        };

        fetchApod();
    }, [api_key]);

    if (!apodData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='py-4 px-4'>
            <h1 className='text-center'>{apodData.title}</h1>
            <p className='text-center text-sm py-2'>{apodData.date}</p>

            <Image
                src={apodData.hdurl}
                alt={apodData.title}
                width={800}
                height={600}
                layout="responsive"
                className='border border-white rounded-md'
            />

            <p>{apodData.explanation}</p>

        </div>
    );
};

export default ApodCard;
