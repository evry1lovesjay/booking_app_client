import  axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL: "http://localhost:6500/api",
//     withCredentials: true,
// })

export const axiosInstance = axios.create({
    baseURL: "https://booking-app-api-iiun.onrender.com/api",
    withCredentials: true,
})

// "proxy":"http://localhost:6500/api"