import React from "react";
import { CardContainer, Link } from "./styles";

function PostCard({ id, title, subtitle }) {
  return (
    <CardContainer key={id}>
      <h4>{title}</h4>
      <p>{subtitle}</p>
      <Link to={`/posts/${id}`}>Detail</Link>
    </CardContainer>
  );
}

export default PostCard;
