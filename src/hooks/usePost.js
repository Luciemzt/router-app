import React from "react";
import { useParams } from "react-router-dom";
import { getPost as getPostService } from "../service";


export function usePost() {
    const [post, setPost] = React.useState({})
    const [loading, setLoading] = React.useState(false)
    const { postId } = useParams()
    const getPost = async () => {
        setLoading(true)
        const post = await getPostService(postId)
        setPost(post)
        setLoading(false)
    }
    React.useEffect(() => {
        if (postId) {
            getPost()
        }
    }, [postId])
    return { post, loading }
}