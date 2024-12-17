import axios from "axios";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = "http://127.0.0.1:5000/api";

/**
 * Registers a new user with the provided data.
 * @param {Object} userData - An object containing the user's registration details.
 * @returns {Object} - The server's response data.
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/register`,
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

/**
 * Logs in a user with the provided credentials.
 * @param {Object} credentials - An object containing the email and password.
 * @returns {Object} - The server's response data, including token and user info.
 */
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/auth/login`,
      credentials
    );
    const { token } = response.data;

    // Save token in localStorage for persistence
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", JSON.stringify(jwtDecode(token)));
    let user = jwtDecode(token);

    // axios = axios.interceptors.request.use(function (config) {
    //   config.headers.Authorization = 'Bearer ' + token;
    //   return config;
    // });
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    return { user, token };
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

/**
 * Fetches the profile of the currently logged-in user.
 * @returns {Object} - The user's profile data.
 */
export const getUserProfile = async () => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No authentication token found.");

    axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    let user = jwtDecode(token);
    return user;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch user profile" };
  }
};

export const getUserWallet = async (userId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/wallet/balance/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

export const getPiesApi = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pies`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

export const buyPieApi = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pies/buy`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

/**
 * Logs out the current user.
 */
export const logoutUser = () => {
  localStorage.removeItem("authToken");
};

export const getClientsApi = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/clients`);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to fetch clients" };
  }
};
