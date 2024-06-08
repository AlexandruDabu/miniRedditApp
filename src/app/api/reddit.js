export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
    try{
    const response = await fetch(`${API_ROOT}${subreddit}.json`)
    const data = await response.json();
    return data.data.children.map((post) => post.data);
    }
    catch(error){
    console.log(error);
    }
}

export const getSubReddits = async () => {
    try{
        const response = await fetch(`${API_ROOT}/subreddits.json`)
        const data = await response.json();
        return data.data.children.map((subreddit) => subreddit.data);
    }catch(error)
    {
        console.log(error);
    }
}

export const getComments = async (permalink) => {
    try{
    const response = await fetch(`${API_ROOT}${permalink}.json`)
    const data = await response.json();
    return data;
    }catch(error){
        console.log(error);
    }

}