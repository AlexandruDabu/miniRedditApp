import { configureStore } from '@reduxjs/toolkit';
import subRedditReducer from '../../features/subReddits/SubRedditsSlice'
import redditReducer from '../../features/postCard/PostsSlice'
const store = configureStore({
  reducer: {
    subreddits: subRedditReducer,
    reddit: redditReducer,
  },
});

export default store;