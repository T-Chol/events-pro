import React from 'react';

const UserProfile = () => {
  // Mock user data
  const user = { name: 'John Doe', email: 'johndoe@example.com' };

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <a href="/settings" className="btn">Edit Profile</a>
    </div>
  );
};

export default UserProfile;
