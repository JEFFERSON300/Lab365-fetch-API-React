import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://rickandmortyapi.com/api/character/150")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="border">
      <img className="image" src={users.image} />
      <h2>{users.name}</h2>
      <h2>{users.gender}</h2>
      <h2>{users.species}</h2>
    </div>
  );
}

export default App;
