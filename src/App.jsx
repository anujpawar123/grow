import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ShellGame from './pages/ShellGame';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Registration Page (Home) */}
        <Route path="/" element={<Register />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Game Page */}
        <Route path="/game" element={<ShellGame />} />

        {/* Catch all to redirect home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}