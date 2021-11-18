import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;

export const getAllUsers = async () => {
  try {
    return await axios.get("public/v1/users");
  } catch (error) {
    throw error;
  }
};

export const addNewUser = async (user) => {
  try {
    return await axios.post("public/v1/users", user);
  } catch (error) {
    throw error;
  }
};
