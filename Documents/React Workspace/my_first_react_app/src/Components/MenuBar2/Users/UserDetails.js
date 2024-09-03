import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Users.css';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  // Get query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get('id');

  useEffect(() => {
    // Fetch user details based on userId
    fetch('/JsonData/users.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedUser = data.find((u) => u.id === parseInt(userId, 10));
        setUser(selectedUser);
      })
      .catch((error) => console.error('Error fetching user details:', error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Details for {user.name}</h2>
      <img src={user.photo} alt={user.name} className="detail-image" />
      <p>Email: {user.email}</p>
      {/* Add more details if available */}
    </div>
  );
};

export default UserDetails;
