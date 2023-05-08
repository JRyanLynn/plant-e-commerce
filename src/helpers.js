import axios from "axios";

//user API calls
const BASE_URL = "http://localhost:5000/api/";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

//post new user
export const sendRegister = (username, email, password) => {
    return axios.post(`${BASE_URL}auth/register`, {
      username,
      email,
      password,
    });
};


//Rating api call:
export const getReviews = async () => {
  try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      return response.data;
  } catch (error) {
      console.log(error);
      return null;
  }
};

//product array
export const getProduct = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/products");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//search results here because of the additional code being passed in from navigate
export const searchResults = async (id) => {
  try {
    const res = await axios.get('http://localhost:5000/api/products');
    const ids = id.split(',').map(Number); // split and convert to array of integers
    const filteredProducts = res.data.filter((product) => ids.includes(product.id));
    return filteredProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};