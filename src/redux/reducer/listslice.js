import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {
    list: [],
    status : "",
    search : "",
    search_cate : "",
    login : false,
}

export const getlist = createAsyncThunk("List/fetchAll", async() => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
});

const listSlice = createSlice({
    name: 'List',
    initialState,
    reducers: {
        searchtext(state,action){
            state.search = action.payload;
        },
        login(state,action){
            state.login = !state.login;
        },
        searchCate(state,action){
            state.search_cate= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getlist.pending, (state, action) => {
            
            state.status = "loading"
        }
        ).addCase(getlist.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = "success"
        }
        ).addCase(getlist.rejected, (state, action) => {
            
            state.status="failed"
        })
    },
})

// pending: 요청 중 상태 업데이트
// fulfilled: 요청 성공 상태 업데이트 > api에 가져오는 데이터 저장
// rejected: 요청 실패 상태 업데이트

export const { searchtext,login,searchCate } = listSlice.actions;
export default listSlice.reducer;