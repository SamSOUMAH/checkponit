
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';
import avion3 from './avion3.jpg'

function App() {
  
  return (
    <div className="App">
        <h1>Alkaly SOUMAH</h1>
        <img src="/logo192.png" alt="image"/>
        <img src={avion3} alt="logo"/>
        <video width="420" height="340" controls>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type=""/>
        </video>
    </div>
  );
}

export default App;
