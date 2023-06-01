import axios from "axios";

export const signUp = async (data) => {
  const response = await axios.post("http://localhost:3000/users/signup", data);
  return response.data;
};

export const signIn = async (data) => {
  const response = await axios.post("http://localhost:3000/login", data);
  return response.data;
};

export const signIn2 = async (data) => {
  const token =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken");

  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
