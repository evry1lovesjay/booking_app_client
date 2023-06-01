import  axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:6500/api",
//     withCredentials: true,
// })


// export const axiosInstance = axios.create({
    //     baseURL: "https://booking-app-api-iiun.onrender.com/api",
    //     withCredentials: true,
    // })
    
// "proxy":"http://localhost:6500/api"

    
const API_URL = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;
    
    export const axiosInstance = axios.create({
        baseURL: `${API_URL}/api` ,
        withCredentials: true,  
    })