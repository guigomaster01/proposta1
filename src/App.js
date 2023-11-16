// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Menu1 from './Menu1';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/menu1/*" element={<Menu1 />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;