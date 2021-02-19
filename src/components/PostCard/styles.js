import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const CardContainer = styled.div`
  border: 1px solid lavender;
  border-radius: 10px;
  max-width: 400px;
  min-width: 300px;
  padding: 10px 20px;
  margin: 10px;
`;

export const Link = styled(RouterLink)`
  font-weight: bold;
  color: gray;
  text-decoration: none;
  font-size: 20px;
`;
