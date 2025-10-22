import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MainServicePage from './pages/MainServicePage';
import Header from './components/Header';
export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  return <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/main" element={isAuthenticated ? <MainServicePage setHasPurchased={setHasPurchased} /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>;
}