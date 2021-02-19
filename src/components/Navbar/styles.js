import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const NavContainer = styled.div`
  background: lavender;
  margin: 0;
  padding: 10px;
`;

export const List = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;
  justify-content: space-evenly;
`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  color: gray;
  text-decoration: none;
  font-size: 20px;
`;
