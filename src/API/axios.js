/**
 * axios.js
 *
 * This file creates and exports an instance of the axios HTTP client with a predefined base URL and headers.
 * The base URL is determined based on the value of the VITE_REACT_APP_MODE environment variable.
 * If VITE_REACT_APP_MODE is "production", the base URL is set to VITE_REACT_APP_API_URL.
 * Otherwise, the base URL is set to VITE_REACT_APP_MOCK_URL.
 * The "Content-Type" header is set to "application/json".
 *
 * @module
 */
import { default as axios } from "axios";

// Base URL for the API
const BASE_URL =
  import.meta.env.VITE_REACT_APP_MODE === "production"
    ? import.meta.env.VITE_REACT_APP_API_URL
    : import.meta.env.VITE_REACT_APP_MOCK_URL;

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export { BASE_URL };
