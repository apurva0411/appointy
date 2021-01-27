import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/homePage/homePage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
