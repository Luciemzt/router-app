import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import Main from "./views/Main/Main";
import Detail from "./views/Detail/Detail";
import Posts from "./views/Posts/Posts";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/posts/:postId">
          <Detail />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
