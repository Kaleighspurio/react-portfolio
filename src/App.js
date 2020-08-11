import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/react-portfolio" component={About} />
        <Route exact path="/react-portfolio/about" component={About} />
        <Route exact path="/react-porfolio/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
