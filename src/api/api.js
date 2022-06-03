import axios from "axios";

export const axiosBase = axios.create({
    baseURL: 'https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product'
});