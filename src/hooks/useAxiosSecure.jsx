import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user ,logOut} = useContext(AuthContext);
  const token = user?.accessToken;
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  //   intercep response
  axiosInstance.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.status === 401 || err.status === 403) {
        logOut()
          .then(() => {
            console.log(
              `You are logged out because of an error with ${err.status} code.`
            );
          })
          .catch((err) => console.log(err));
      }
      return Promise.reject(err);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
