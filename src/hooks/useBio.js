import { useQuery } from "react-query";
import axios from "axios"

const fetchBio = async (username) => {
    const payload = {
        username: username
    }
  const res = await axios.post("/api/bio", payload);
  const result = res.data

  return result;
};

const useBio = (username) => {
  return useQuery(["bio", username], () => fetchBio(username));
};


export { useBio, fetchBio};