import React, { useEffect } from "react";
import "../../App.css";
import api from "../../helpers/api";
import { useState } from "react";
import UserCard from "../UserCard";

function ReactHome() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get("/test_users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch(() => {})
      .finally(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {users.map((user, index) => {
            return <UserCard key={index} user={user} />;
          })}
        </ul>
      </header>
    </div>
  );
}

export default ReactHome;
