/*

- use effect is  a hook used for importing json file

- now in this file i am importing custom json data

- since i usen [] then component once by default

- Json data placed in public folder

- Users.css was placed in same folder


*/

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Use useNavigate to programmatically navigate

  // Fetch the JSON data
  useEffect(() => {
    fetch('/JsonData/users.json') // Assuming the file is in the public directory
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Function to handle user click and navigate to user details page
  const handleUserClick = (user) => {
    navigate(`/user/details?id=${user.id}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id} className="card" onClick={() => handleUserClick(user)}>
            <img src={user.photo} alt={user.name} className="card-image" />
            <div className="card-content">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
