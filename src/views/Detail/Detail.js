import React from "react";
import { usePost } from "../../hooks/usePost";
import { Container } from "./styles";

function Detail() {
  const { post, loading } = usePost();

  if (loading) {
    return <h3>loading ....</h3>;
  }

  return (
    <Container>
      <h4>{post.title}</h4>
      <p>{post.subtitle}</p>
      <p>{post.content}</p>
      {post.author && <p>{post.author}</p>}
    </Container>
  );
}

export default Detail;
