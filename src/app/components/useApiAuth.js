import axios from "axios";
import Cookies from "js-cookie";

const useApiAuth = () => {
  const token = Cookies.get("token"); 
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://admin.eazisols.com";
console.log("BASE URL:", baseUrl);


  const postData = async (
    endPoint,
    data,
    success = () => {},
    errorFun = () => {}
  ) => {
    try {
      const response = await axios.post(`${baseUrl}${endPoint}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
      });
      console.log("POST success:", response.data);
      success(response.data);
    } catch (error) {
      console.error("POST error:", error.response || error);
      errorFun(error);
    }
  };

  const getData = async (
    endPoint,
    success = () => {},
    errorFun = () => {}
  ) => {
    try {
      const response = await axios.get(`${baseUrl}${endPoint}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("GET success:", response.data);
      success(response.data);
    } catch (error) {
      console.error("GET error:", error.response || error);
      errorFun(error);
    }
  };

  return { postData, getData };
};

export default useApiAuth;
