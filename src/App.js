import React, { useState, useEffect } from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from './components/Home';
import PropuestaUno from './components/PropuestaUno';
import PropuestaDos from './components/PropuestaDos';
import PropuestaTres from './components/PropuestaTres';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1)
    }, 5000);
  })

  
  return (
    <HashRouter basename="/">
        <Route exact path="/" component={Home} />
        <Route exact path="/propuesta-uno" component={PropuestaUno} />
        <Route exact path="/propuesta-dos" component={PropuestaDos} />
        <Route exact path="/propuesta-tres" component={PropuestaTres} />
    </HashRouter>
  );
}

export default App;
