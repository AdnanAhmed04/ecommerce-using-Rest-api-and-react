import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>

    {/* ac may hum nay simpple 2 routes banayee hai home or product ka page or uss ko id se differ kar deya hai  */}
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
