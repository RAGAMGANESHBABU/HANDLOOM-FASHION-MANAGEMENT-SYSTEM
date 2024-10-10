import React, { useState } from 'react';
import './AdminDashboard.css'; // Optional: Add styles for the Admin Dashboard

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    { id: 1, username: 'artisan', role: 'Artisan' },
    { id: 2, username: 'buyer', role: 'Buyer' },
    { id: 3, username: 'marketing', role: 'Marketing Specialist' },
  ]);

  const [newUser, setNewUser] = useState({ username: '', role: '' });

  const handleAddUser = () => {
    if (newUser.username && newUser.role) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ username: '', role: '' });
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <h2>Manage Users</h2>
      
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Username"
          value={newUser.username}
          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
