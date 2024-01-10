import axios from "axios";

export function useAxios() {
  const instance = axios.create({
    baseURL: "",
  });

  return instance;
}
