import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetail = createAsyncThunk(
    "movie/getDetail",
    async (params) => {
        const url = `${process.env.REACT_APP_BASE_URL}/movie/${params}?api_key=${process.env.REACT_APP_API_KEY}`;
        const response = await axios.get(url);

        return response.data;
    }
);