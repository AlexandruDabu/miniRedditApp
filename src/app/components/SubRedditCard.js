import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSubreddits, selectSubreddits, isLoading } from "../../features/subReddits/SubRedditsSlice";
import {selectSelectedSubreddit, setSelectedSubreddit} from '../../features/postCard/PostsSlice'

function SubRedditCard(){
    
const dispatch = useDispatch();
const subreddits = useSelector(selectSubreddits);
const loading = useSelector(isLoading);
const selectSubreddit = useSelector(selectSelectedSubreddit);
useEffect(() => {
    dispatch(fetchSubreddits);
}, [dispatch])

// WITHOUT SLICES
// const fetchData = async () => {
//     try{
//     const response = await fetch(`https://www.reddit.com/subreddits.json`)
//     const data = await response.json();
//     data.data.children.map(item => {
//         console.log(item.data.display_name)
//     })
//     }catch(err){
//         console.log(err);
//     }
// }
// useEffect(() => {
//     fetchData();
// })

    return(
        <div className="subreddit-cards">
            <h2>SubReddits</h2>
                {loading ? ('Loading...') : (
            <ul className="subreddit-list">
                {subreddits.map(subreddit => (
                    <li className={`${selectSubreddit == subreddit.url && 'selected-subreddit'}`}>
                        <button onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                            <img className="subreddit-icon" src={subreddit.icon_img} alt={subreddit.display_name}></img>
                            {subreddit.display_name}
                        </button>
                    </li>))}
                 
            </ul>
        )}
        </div>
)
}
export default SubRedditCard