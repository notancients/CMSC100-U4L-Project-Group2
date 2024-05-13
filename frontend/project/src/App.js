import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';

const menus = [
  { name: "Product Statistics", url: "#", id: 1 },
  { name: "Weekly", url: "#", id: 2 },
  { name: "Monthly", url: "#", id: 3 },
  { name: "Annualy", url: "#", id: 4 },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sales Report</h1>
        <Menu menus={menus} />
      </header>
      <Footer />
    </div>
  );
}

export default App;
