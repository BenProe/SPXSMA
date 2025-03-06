import axios from 'axios';

const API_URL = 'https://api.example.com/spx'; // Replace with the actual API endpoint

export const fetchSPXData = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching SPX data:', error);
        throw error;
    }
};