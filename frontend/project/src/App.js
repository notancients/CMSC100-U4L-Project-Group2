import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SalesPage from './components/SalesPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SalesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
