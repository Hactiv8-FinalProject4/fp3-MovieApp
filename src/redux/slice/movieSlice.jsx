import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../../utils/getData";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    popularMovies: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, { payload }) => {
        state.popularMovies = payload.results;
        state.isLoading = false;
      })
      .addCase(getData.rejected, (state) => {
        console.log('get data rejected');
        state.isLoading = false;
      });
  },
});

export default movieSlice.reducer;
