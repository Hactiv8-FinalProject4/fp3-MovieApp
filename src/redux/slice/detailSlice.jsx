import { createSlice } from "@reduxjs/toolkit";
import {getDetail} from '../../utils/getDetail';

const detailSlice = createSlice({
    name: "detail",
    initialState: {
        detail: {},
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDetail.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getDetail.fulfilled, (state, { payload }) => {
                state.detail = payload;
                state.isLoading = false;
            })
            .addCase(getDetail.rejected, (state) => {
                console.log('get detail rejected');
                state.isLoading = false;
            });
    }

});

export default detailSlice.reducer;