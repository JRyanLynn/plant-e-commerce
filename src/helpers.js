import axios from "axios";

//connecting stripe backend
const API = 'http://localhost:5000';

export async function fetchFromAPI(endpoint, opts) {
    const {method, body} = {method: 'POST', body: null, ...opts};

    //Use axios here 
    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && {body: JSON.stringify(body)}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
}

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
