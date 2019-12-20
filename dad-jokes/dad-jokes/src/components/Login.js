import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  const [crede, setCrede] = useState({ username: "", password: "" });

  const changeHandler = e => {
    e.persist();
    setCrede({ ...crede, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3300/api/auth/login", crede)
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/jokes");
        } else {
          alert("try a different username and/or password");
        }
      })
      .catch(err => {
        console.log(err);
        alert("try a different username and/or password");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={changeHandler}
            placeholder="username"
            value={crede.username}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={changeHandler}
            placeholder="password"
            value={crede.password}
          ></input>
        </label>
        <button>Login Account</button>
      </form>
    </div>
  );
};

export default Login;
