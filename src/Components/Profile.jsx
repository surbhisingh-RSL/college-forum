import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Profile = ({ onLogout}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout()
    navigate('/login', { replace: true });
  };

  return (
    <Card className="p-4 mt-4 shadow-sm" style={{ maxWidth: '400px', margin: 'auto' }}>
      <Card.Body>
        <Card.Title className="mb-4">Profile</Card.Title>
        <p><strong>Username:</strong>
         {/* {user?.username || '—'} */}
         </p>
        <p><strong>Mobile Number:</strong>
         {/* {user?.mobile || '—'} */}
         </p>
        <p><strong>Email:</strong> 
        {/* {user?.email || '—'} */}
        </p>
        <p><strong>No. of Posts:</strong> 
        {/* {postCount ?? '—'} */}
        </p>
        <Button variant="outline-danger" onClick={handleLogout} className="mt-3">
          Logout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
