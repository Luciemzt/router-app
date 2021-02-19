import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../service";
import * as S from "./styles";

function AuthForm() {
  const { push } = useHistory();
  const initialState = {
    username: "",
    password: "",
  };
  const [user, setUser] = React.useState(initialState);

  const handleChange = ({ target }) =>
    setUser({ ...user, [target.name]: target.value });

  const handleSumbmit = async (e) => {
    e.preventDefault();
    const loggedUser = await login(user);
    if (loggedUser) {
      push("/");
    }
  };
  return (
    <S.Form onSubmit={handleSumbmit}>
      <S.Label htmlFor="username">Username</S.Label>
      <S.Input
        name="username"
        type="text"
        value={user.username}
        onChange={handleChange}
      />
      <S.Label htmlFor="username">Password</S.Label>
      <S.Input
        name="password"
        type="password"
        value={user.password}
        onChange={handleChange}
      />
      <S.Button type="submit">login</S.Button>
    </S.Form>
  );
}

export default AuthForm;
