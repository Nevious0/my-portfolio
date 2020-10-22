import React from 'react';
import Nav from './components/Navbar/Nav'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './components/Home/Home'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route path="/" exact component={Home}/>
   
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/contact" component={Contact}/>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
