import React from "react";
import { MainLink, Title, Container } from "./styles";

function Main() {
  return (
    <Container>
      <Title>Welcome</Title>
      <MainLink to="/posts">Posts</MainLink>
    </Container>
  );
}

export default Main;
