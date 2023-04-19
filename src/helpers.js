
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