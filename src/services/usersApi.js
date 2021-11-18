import axios from "axios";

console.log(`object1`, process.env.REACT_APP_API_URL);
console.log(`object2`, process.env.REACT_APP_API_KEY);

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
    console.log(`user`, user);
    return await axios.post("public/v1/users", user);
  } catch (error) {
    throw error;
  }
};
