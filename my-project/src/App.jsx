// App.js
import {Navigate, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import "./App.css";
import Cookies from 'js-cookie';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  const accessToken = Cookies.get('auth_token2');

 return (
    <>
       <Routes>
       {!accessToken ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/login" element={<Navigate to="/" />} />
        )}
           <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
       </Routes>
    </>
 );
};

export default App;