import { apiUrl } from "./config";

axios.defaults.timeout = 6000;
axios.defaults.baseURL = apiUrl;