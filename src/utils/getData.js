import axios from "axios";

export const getData = async (endpoint, query) => {
  const url = `${process.env.REACT_APP_BASE_URL}/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}${query}`;
  const response = await axios.get(url);

  return response.data;
};
