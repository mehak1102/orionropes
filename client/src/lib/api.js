import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: import.meta.env.VITE_API_URL, 
});

// attach token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message;

    // 🔥 session expired / unauthorized
    if (error?.response?.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");

      toast.error("Session expired. Please login again.");

      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);

export default api;