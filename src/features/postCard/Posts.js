import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../app/components/PostCard";
import { fetchPosts, selectFilteredPosts } from "./PostsSlice";
import { useEffect } from "react";
function Posts() {
    const reddit = useSelector((state) => state.reddit)
    const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
    const posts = useSelector(selectFilteredPosts);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchPosts(selectedSubreddit))
    },[selectedSubreddit])
    return(
        <>
        {isLoading ? ("Data is loading...") : (
            posts.map(post => (
            <PostCard
            key= {post.id}
            post={post}/>
        )))}
        </>
    )
}
export default Posts;