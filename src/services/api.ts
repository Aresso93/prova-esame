import { useState } from "react";
import { useAxios } from "./useAxios";

export function useApi() {
  const axios = useAxios();
  const [data, setData] = useState([]);

  async function getData() {
    const dataResp = await axios("");
    console.log("AAAAA", dataResp.data);
    setData(dataResp.data);
  }

  return {
    actions: {
      getData,
    },
    states: {
      data,
    },
  };
}
