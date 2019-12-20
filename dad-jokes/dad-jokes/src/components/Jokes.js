import React, { useState, useEffect } from "react";
import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });
};

const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:3300/api/jokes")
      .then(res => {
        console.log(res);
        setJokes(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {jokes &&
        jokes.map(joke => {
          return <p key={joke.id}>{joke.joke}</p>;
        })}
    </div>
  );
};

export default Jokes;
