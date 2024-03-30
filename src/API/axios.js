import { default as axios } from "axios";

// Base URL for the API
const BASE_URL =
  import.meta.env.VITE_REACT_APP_MODE === "production"
    ? import.meta.env.VITE_REACT_APP_API_URL
    : import.meta.env.VITE_REACT_APP_MOCK_URL;
    
    console.log("BASE_URL: ", BASE_URL);

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export { BASE_URL };
