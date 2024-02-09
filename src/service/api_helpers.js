import axios from 'axios';

//apply base url for axios
const API_URL = 'http://127.0.0.1:8000/';

const axiosApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
        allowedHeaders: '*',
    },
});

export async function get(url, config = {}) {
    return await axiosApi.get(url, { ...config }).then((response) => response.data);
}

export async function post(url, data, config = {}, token) {
    return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function put(url, data, config = {}) {
    return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data);
}

export async function del(url, config = {}) {
    return await axiosApi.delete(url, { ...config }).then((response) => response.data);
}