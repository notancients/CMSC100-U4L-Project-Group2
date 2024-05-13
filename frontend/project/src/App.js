import React, { useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';

const menus = [
  { name: "Pending", url: "#", id: 1 },
  { name: "Confirmed", url: "#", id: 2 },
];

function App() {
  return (
    <div className="App">
      <header>
        <h1>Order Fulfillment</h1>
        <Menu menus={menus} />
      </header>
      <Footer />
    </div>
  );
}

export default App;