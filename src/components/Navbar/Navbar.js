import React from "react";
import { Link, List, NavContainer } from "./styles";

function Navbar() {
  return (
    <NavContainer>
      <List>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </List>
    </NavContainer>
  );
}

export default Navbar;
