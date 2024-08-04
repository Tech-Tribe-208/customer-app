import {API_URL} from "@env";

const baseURL = API_URL;

import axios from 'axios';

const apiRequests = {
    signup: async (customerInfo) => {
        try{
            const response = await axios.post(`${baseURL}/customer/signup`, customerInfo);
            return response;
        }
        catch(error){
            return error.response;
        }
    },
    login: async (customerInfo) => {
        try{
            const response = await axios.get(`${baseURL}/customer/login`, customerInfo);
            return response;
            }
        catch(error){
            return error.response;
        }
    },
    createBooking: async (bookingInfo) => {
        try{
        const response = await axios.post(`${baseURL}/customer/bookings`, bookingInfo);
        return response;
        }   
        catch(error){
            return error.response;
        }
    },
    getBooking: async (bookingId) => {
        try{
            const response = await axios.get(`${baseURL}/customer/bookings`, bookingId);
            return response;
        }
        catch(error){
            return error.response;
        }
    },
}

module.exports = apiRequests;