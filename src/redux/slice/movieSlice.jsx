import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d32c9ac6accdee12edce1834136446f7`
    );
    return response.data.results;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    popularMovies: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, { payload }) => {
        state.popularMovies = payload;
        state.isLoading = false;
      });
  },
});

export default movieSlice.reducer;
