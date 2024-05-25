import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import SalesPage from './components/SalesPage';
import WeeklySales from './components/WeeklySales';
import MonthlySales from './components/MonthlySales';
import AnnualSales from './components/AnnualSales';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/sales/:id/weekly" element={<WeeklySales />} />
          <Route path="/sales/:id/monthly" element={<MonthlySales />} />
          <Route path="/sales/:id/annual" element={<AnnualSales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
