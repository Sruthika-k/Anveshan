import axios from "axios";

const API_URL = "http://127.0.0.1:8000"; // FastAPI backend

export const getMatches = async (userId, skills) => {
  try {
    const response = await axios.post(`${API_URL}/matchmaking/`, {
      id: userId,
      skills: skills,
    });
    return response.data.matches;
  } catch (error) {
    console.error("Error fetching matches:", error);
    return [];
  }
};
