import { createSlice } from "@reduxjs/toolkit";
import { getSubReddits } from "../../app/api/reddit";


const initialState = {
    isLoading: true,
    error: false,
    subreddits: {

    }
}
const subRedditSlice = createSlice({
    name: 'subreddits',
    initialState: initialState,
    reducers: {
        startGetSubreddits(state){
            state.isLoading = true;
            state.error = false;
        },
        getSubredditsSuccess(state, action){
            state.isLoading = false;
            state.subreddits = action.payload;
        },
        failedGetSubreddits(state){
            state.isLoading = false;
            state.error = true;
        }
    }
})

export const { startGetSubreddits, getSubredditsSuccess, failedGetSubreddits } = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = async (dispatch) => {
    try{
        dispatch(startGetSubreddits());
        const subreddits = await getSubReddits();
        dispatch(getSubredditsSuccess(subreddits));
    }catch(error){
        dispatch(failedGetSubreddits);
    }
}

export const selectSubreddits = (state) => state.subreddits.subreddits;
export const isLoading = (state) => state.subreddits.isLoading;