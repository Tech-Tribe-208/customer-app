import {API_URL} from "@env";

const baseURL = API_URL;

import axios from 'axios';

const apiRequests = {
    signup: async (customerInfo) => {
        const response = await axios.post(`${baseURL}/customer/signup`, customerInfo);
        console.log('response:', response);
        return response;
    },
    login: async (customerInfo) => {
        const response = await axios.get(`${baseURL}/customer/login`, customerInfo);
        return response;
    },
    createBooking: async (bookingInfo) => {
        const response = await axios.post(`${baseURL}/customer/bookings`, bookingInfo);
        return response;
    },
    getBooking: async (bookingId) => {
        const response = await axios.get(`${baseURL}/customer/bookings`, bookingId);
        return response;
    },
}

module.exports = apiRequests;