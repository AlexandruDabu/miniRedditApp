import { useState } from "react";
import shortenNumber from '../utils/shortenNumber'
import moment from 'moment';

function PostCard(props) {
  const [voteValue, setVoteValue] = useState(0);
  const {post} = props;
  const onHandlerVote = (vote) => {
    if(vote === voteValue) {
        setVoteValue(0);
    } else if(vote === 1){
        setVoteValue(1);
    }else setVoteValue(-1);
  };
  const renderUpVote = () => {
    if(voteValue === 1) {
        return (<p>Liked</p>)
    }
  }
  const renderDownVote = () => {
    if(voteValue === -1 ){
        return (<p>Disliked</p>)
    }
  }
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
                        <button className={`icon-action-button up-vote ${voteValue===1 && 'active'}`}onClick={() => onHandlerVote(1)}><i class="fa-solid fa-heart"></i></button>
                        <p>{shortenNumber(post.ups,1)}</p>
                        <button className={`icon-action-button down-vote ${voteValue===-1 && 'active'}`} onClick={() => onHandlerVote(-1)}><i class="fa-solid fa-heart-crack"></i></button>
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
                            <button><span><i class="fa-regular fa-comment"></i> {shortenNumber(post.num_comments,1)}</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}
export default PostCard;