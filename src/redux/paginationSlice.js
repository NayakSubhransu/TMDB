import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
    name:"paginationSlice",
    initialState:{
        page:1
    },
    reducers:{
        nextPage:(state) =>{
            state.page +=1;
        },
        prevPage:(state) => {
            if (state.page > 1){
                state.page -= 1;
            }
            
        },
        setPage: (state) => {
            state.page=1
          },
    }
})

export const {setPage} = paginationSlice.actions;
export default paginationSlice;