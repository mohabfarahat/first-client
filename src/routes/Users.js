import React, { useEffect, useState } from "react";

function Users() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <>
      {typeof backendData.users === "undefined" ? (
        <p>loading...</p>
      ) : (
        backendData.users.map((users, i) => <p key={i}>{users}</p>)
      )}
    </>
  );
}

export default Users;
