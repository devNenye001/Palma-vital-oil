import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404/404';
import Home from './pages/Home/Home';
import Products from './pages/products/products';
import Contact from './pages/contact/contact';
import FAQs from './pages/faqs/faqs';

function App() {
  return (
    <Router>   
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faqs" element={<FAQs/>} />
   </Routes>
    </Router>
  );
}

export default App;