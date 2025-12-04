import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const searchItems = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
        return response.data
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}