import axios from "axios";

// User API calls
const BASE_URL = "http://localhost:5000/api/";
export const url = "http://localhost:5000/api";

// Pulls user from local storage
const storedUser = localStorage.getItem("currentUser");
const user = storedUser ? JSON.parse(storedUser) : null;

const TOKEN = user?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

// Post new user
export const sendRegister = (username, email, password) => {
  return axios.post(`${BASE_URL}auth/register`, {
    username,
    email,
    password,
  });
};

// Rating API call
export const getReviews = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/reviews");
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Product array
export const getProduct = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Search results
export const searchResults = async (id) => {
  try {
    const res = await axios.get("http://localhost:5000/api/products");
    const ids = id.split(",").map(Number);
    const filteredProducts = res.data.filter((product) => ids.includes(product.id));
    return filteredProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};


