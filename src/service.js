import { posts } from "./mocks/posts"

// POSTS 
const delay = (data) => new Promise(res => setTimeout(() => { res(data) }, 1000))

export const getPosts = () => delay([...posts])

const getById = postId => posts.find(post => post.id == postId)

export const getPost = postId => delay(getById(postId))

const removeById = postId => posts.filter(post => post.id == postId)

export const removePost = postId => delay(removeById(postId))

const createNewPost = post => posts.concat(post)

export const createPost = post => delay(createNewPost(post))


// LOGIN

export const login = user => delay(user)

