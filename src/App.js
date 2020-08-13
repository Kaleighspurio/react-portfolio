import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
