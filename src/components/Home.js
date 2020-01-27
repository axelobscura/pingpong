import React from 'react';
import logo from '../images/logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="Ping Poing" title="Ping Poing" />
        <div className="lpropuesta">
          <Link to="/propuesta-uno"><i className="lni-arrow-right-circle"></i> PROPUESTA UNO</Link>
          <Link to="/propuesta-dos"><i className="lni-arrow-right-circle"></i> PROPUESTA DOS</Link>
          <Link to="/propuesta-tres"><i className="lni-arrow-right-circle"></i> PROPUESTA TRES</Link>
        </div>
      </div>
    </div>
  )
}

export default Home;