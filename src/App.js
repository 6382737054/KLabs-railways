import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import CreateAccount from './pages/createaccount';
import ForgotPassword from './pages/forgotpassword';
import Home from './pages/Home';
import Form1 from './pages/Form1';
import Form2 from './pages/Form2';
import Form3 from './pages/Form3';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login, Create Account, and Forgot Password Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        
        {/* Home Page Route */}
        <Route path="/home" element={<Home />} />

        {/* Form Routes */}
        <Route path="/form1" element={<Form1 />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} />
      </Routes>
    </Router>
  );
}

export default App;
