import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "movie/getData",
  async (params) => {
    const url = `${process.env.REACT_APP_BASE_URL}/${params.endpoint}?api_key=${process.env.REACT_APP_API_KEY}${params.query}`;
    const response = await axios.get(url);

    return response.data;
  },
);
