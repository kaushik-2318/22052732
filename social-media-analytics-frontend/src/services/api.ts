import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

export const getLatestPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts?type=latest`);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

export const getPopularPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts?type=popular`);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

export const getUserPosts = async (userId: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}/posts`);
        return response.data.posts;
    } catch (error) {
        console.error("Error fetching user posts:", error);
        return [];
    }
};
