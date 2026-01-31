import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404/404';
import Home from './pages/Home/Home';
// Import other pages as you create them

function App() {
  return (
    <Router>   
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
   </Routes>
    </Router>
  );
}

export default App;