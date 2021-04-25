import axios, { AxiosRequestConfig } from "axios";


const config: AxiosRequestConfig = {
    baseURL: "https://my-json-server.typicode.com/vaclavbenes/real-world3",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
    }
}

const apiClient = axios.create(config)

export async function getEvents() {
    return await apiClient.get("/events")
}

export async function getEvent(id: number) {
    return await apiClient.get("/events/" + id)
}