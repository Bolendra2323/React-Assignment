import React, { useState } from "react";
const Apidata = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  function save() {
    alert("Data Is saved");
  }
  return (
    <div>
      <h1>Live API data</h1>
      <button onClick={fetchData}  class="btn btn-primary mr-3">Click-Me To see Live API data</button>
      <button onClick={save}  class="btn btn-danger">
        Save
      </button>
      <div className="container">
        <div className="py-4">
          <table class="table border shadow black">
            <thead class="thead-dark">
              <tr>
                <th scope="col">S.No:</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Apidata;
