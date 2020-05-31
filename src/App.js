import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import WorldTable from './components/WorldTable'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Card></Card>
      <WorldTable></WorldTable>
    </div>
  );
}

export default App;
