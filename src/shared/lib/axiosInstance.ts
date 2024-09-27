import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
export interface ErrorResponse {
  message: string;
  [key: string]: any; // Allow additional properties
}

export const isErrorResponse = (error: unknown): error is ErrorResponse => {
  return typeof error === "object" && error !== null && "message" in error;
};

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL ||
    " https://abdomax.ddns.net"
    }/api/v1`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Request interceptor to attach token to every request
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    // Ensure headers are defined
    if (config.headers) {
      // Retrieve tokens from cookies
      // const cookies = document.cookie.split("; ");
      // const adminToken = cookies
      //   .find((row) => row.startsWith("admin_token="))
      //   ?.split("=")[1];
      // const brokerToken = cookies
      //   .find((row) => row.startsWith("broker_token="))
      //   ?.split("=")[1];
      // // Determine which token to use
      // let token = adminToken; // Default to admin_token
      // const role = cookies
      //   .find((row) => row.startsWith("role="))
      //   ?.split("=")[1];
      // if (role === "broker") {
      //   token = brokerToken; // Use broker_token if role is broker
      // }
      // if (token) {
      //   (config.headers as Record<string, string>)[
      //     "Authorization"
      //   ] = `${token}`;
      // }
    }

    return config;
  },
  (error: AxiosError) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors and exceptions globally
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // Return response data
    return response;
  },
  (error: any) => {
    // Global error handling
    let errorMessage = "An unexpected error occurred";

    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data as ErrorResponse; // Type assertion
      errorMessage = errorData.message || errorMessage;
      if (error.response?.status === 401) {
        // Handle unauthorized errors
        // console.error("Unauthorized access - redirecting to login");
        // Optionally redirect to login page or handle logout
      } else if (error.response?.status === 500) {
        // Handle server errors
        // console.error("Server error - please try again later");
      }
    } else if (error instanceof Error) {
      // Handle generic errors
      errorMessage = error.message || errorMessage;
    }

    // console.error(errorMessage);
    return Promise.reject(new Error(errorMessage));
  }
);

export default axiosInstance;
