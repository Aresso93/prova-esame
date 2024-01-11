import axios from "axios";

export function useAxios() {
  const instance = axios.create({
    baseURL: "https://restcountries.com/v3.1/region",
  });

  return instance;
}
