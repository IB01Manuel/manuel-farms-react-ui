import axios from 'axios';

// Use environment variable for API URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const searchItems = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}