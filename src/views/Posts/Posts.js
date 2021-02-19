import React from "react";
import { usePosts } from "../../hooks/usePosts";
import { PostCard } from "../../components/PostCard";
import { Grid, Title } from "./styles";

function Posts() {
  const { posts, loading } = usePosts();

  if (loading) {
    return <h1>loading ....</h1>;
  }

  return (
    <div>
      <Title>Posts</Title>
      <Grid>
        {posts.map((post) => (
          <PostCard {...post} key={post.id} />
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
