import axios from "axios";

// ایجاد instance Axios با تنظیمات پایه
const apiClient = axios.create({
  baseURL: "https://api.example.com", // آدرس پایه API
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 ثانیه
});

// Interceptor برای درخواست‌ها (اضافه کردن توکن یا لاگ)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // می‌توانید token را اضافه کنید
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor برای پاسخ‌ها (مدیریت خطا)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // مدیریت خطاها، مثل logout روی 401
    if (error.response?.status === 401) {
      console.warn("Unauthorized! Log out user if needed");
    }
    return Promise.reject(error);
  }
);

// توابع عمومی برای استفاده
const api = {
  get: async (url, config = {}) => {
    const response = await apiClient.get(url, config);
    return response.data;
  },
  post: async (url, data = {}, config = {}) => {
    const response = await apiClient.post(url, data, config);
    return response.data;
  },
  put: async (url, data = {}, config = {}) => {
    const response = await apiClient.put(url, data, config);
    return response.data;
  },
  delete: async (url, config = {}) => {
    const response = await apiClient.delete(url, config);
    return response.data;
  },
  instance: apiClient,
};

export default api;
