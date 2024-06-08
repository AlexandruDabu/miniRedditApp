import { useState } from "react";
import shortenNumber from '../utils/shortenNumber'
import moment from 'moment';

function PostCard(props) {
  const [voteValue, setVoteValue] = useState(0);
  const {post} = props;
  
  const onHandlerVote = (newValue) => {
    if(newValue === voteValue){
        setVoteValue(0);
    } else if(newValue === 1) {
        setVoteValue(1);
    } else {
        setVoteValue(-1);
    }
};

      const getVoteType = () => {
        if (voteValue === 1) {
          return 'up-vote';
        }
        if (voteValue === -1) {
          return 'down-vote';
        }
    
        return '';
      };
    return (
        <article key={post.id}>
            <div className="card">
                <div className="post-wrapper">
                    <div className="votes-counter">
                        <button onClick={() => onHandlerVote(1)}>L</button>
                        <p>{shortenNumber(post.ups,1)}</p>
                        <button onClick={() => onHandlerVote(-1)}>D</button>
                    </div>
                    <div className="post-container">
                        <h3 className="post-title">{post.title}</h3>
                        <div className="post-image">
                            {post.url ? (
                            <img src={post.url}></img>) : ('')}
                        </div>
                        <div className="post-details grid grid-cols-3">
                            <span className="authorName">{post.author}</span>
                            <span className="Time">{moment.unix(post.created_utc).fromNow()}</span>
                            <span><button>Comments</button>{shortenNumber(post.num_comments,1)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default PostCard;