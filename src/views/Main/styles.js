import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Title = styled.h1`
  text-align: center;
  color: gray;
  font-size: 44px;
`;

export const MainLink = styled(RouterLink)`
  text-decoration: none;
  color: lavender;
  font-weight: bold;
  border-radius: 5px;
  border: 3px solid lavender;
  margin: 10px auto;
  padding: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
