import { createSelector, createSlice } from "@reduxjs/toolkit"
import { getSubredditsSuccess } from "../subReddits/SubRedditsSlice";
import { getSubredditPosts } from "../../app/api/reddit";

const initialState = {
    posts: [],
    error: false,
    isLoading: true,
    searchTerm: '',
    selectedSubreddit: '/r/pics/',
}

const redditSlice = createSlice({
    name: 'redditPosts',
    initialState: initialState,
    reducers: {
        setPosts(state,action) {
            state.posts = action.payload;
        },
        startGetPosts(state){
            state.isLoading = true;
            state.error = false;
        },
        getPostsSuccess(state,action) {
            state.isLoading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload;
        },
        setSelectedSubreddit(state,action){
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        }
    }
})

export const {setPosts, startGetPosts, getPostsSuccess, getPostsFailed, setSearchTerm, setSelectedSubreddit} = redditSlice.actions;

export default redditSlice.reducer;

export const fetchPosts = (subreddit) => async (dispatch) => {
    try{
        dispatch(startGetPosts());
        const posts = await getSubredditPosts(subreddit);
        const postsWithMetadata = posts.map(post => ({
            ...post,
            showingComments: false,
            comments: [],
            loadingComments: false,
            errorComments: false, 
        }))
        dispatch(getPostsSuccess(postsWithMetadata));
    }catch(error){
        dispatch(getPostsFailed());
    }
};

const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) => state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
    [selectPosts, selectSearchTerm],
    (posts, searchTerm) => {
        if(searchTerm !== '') {
            return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
        return posts;
    }
)