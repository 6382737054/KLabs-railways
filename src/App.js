import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/login';
import CreateAccount from './pages/createaccount';
import ForgotPassword from './pages/forgotpassword';
import Home from './pages/Home';
import Form1 from './pages/Form1';  // Import Form1 component
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';
import Navbar from './pages/Navbar';

function App() {
  const location = useLocation(); // Hook to get the current route

  // Define the routes where the Navbar should be hidden
  const hideNavbarRoutes = ['/', '/create-account', '/forgot-password'];

  return (
    <>
      {/* Conditionally render the Navbar only if the current route is not in the hideNavbarRoutes array */}
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        {/* Login, Create Account, and Forgot Password Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Home Page Route */}
        <Route path="/home" element={<Home />} />

        {/* Form Routes */}
        <Route path="/form1" element={<Form1 />} />  {/* Add route for Form1 */}
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
