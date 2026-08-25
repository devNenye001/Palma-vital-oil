import React from 'react';
import Maintenance from './pages/Maintenance/Maintenance';
// Import existing pages (commented out during maintenance)
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NotFound from './pages/404/404';
// import Home from './pages/Home/Home';
// import Products from './pages/products/products';
// import Contact from './pages/contact/contact';
// import FAQs from './pages/faqs/faqs';
// import About from './pages/about/about';
// import Distributor from './pages/distributor/distributor';

function App() {
  return (
    <Maintenance />
    /* Commented out during maintenance
    <Router>   
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faqs" element={<FAQs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/distributor" element={<Distributor/>} />
   </Routes>
    </Router>
    */
  );
}

export default App;