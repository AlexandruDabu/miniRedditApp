const ROUTES = {
    posts: () => "/posts",
    postByName: (id) => `/posts/${id}`,
    postBySubReddit: (name) => `/posts/${name}`
}

export default ROUTES;