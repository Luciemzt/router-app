import React from "react";
import { getPosts as getPostsService } from "../service"

export function usePosts() {
    const [posts, setPosts] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const getPosts = async () => {
        setLoading(true)
        const posts = await getPostsService()
        setPosts(posts)
        setLoading(false)
    }
    React.useEffect(() => {
        getPosts()
    }, [])
    return {
        posts,
        loading
    }
}