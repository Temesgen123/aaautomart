import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import SearchPage from './pages/SearchPage';
import CarsDetails from './components/Cars/CarsDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/aaautomart" element={<Home />} />
          <Route path="/aaautomart/about" element={<About />} />
          <Route path="/aaautomart/cars" element={<Cars />} />
          <Route path="/aaautomart/services" element={<Services />} />
          <Route path="/aaautomart/contactus" element={<Contact />} />
          <Route path="/aaautomart/search" element={<SearchPage />} />
          <Route path="/aaautomart/cardetails" element={<CarsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
