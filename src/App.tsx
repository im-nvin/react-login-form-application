import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserFormPage from './pages/userformpage/UserFormPage';
import SecondPage from  './pages/secondpage/SecondPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user-form" element={<UserFormPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/" element={<Navigate to="/user-form" />} />
      </Routes>
    </Router>
  );
};

export default App;
