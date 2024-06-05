import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const accessToken = Cookies.get('auth_token2');

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const response = await axios.post('http://localhost:3000/validate-token',{},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        console.log('Token is valid:', response.data);
      } catch (error) {
        console.error('Token is invalid or expired:', error);
        navigate('/login');
      }
    };

    if (accessToken) {
      checkTokenValidity();
    } else {
      navigate('/login');
    }
  }, [accessToken, navigate]);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
