import axios from 'axios'

const baseURL: string = import.meta.env.VITE_APP_API_URL as string;

export const extractClient = axios.create({ baseURL })
