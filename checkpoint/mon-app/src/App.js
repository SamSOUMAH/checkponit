
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';
import Adresse from './Components/Profile/Adresse';
import FullName from './Components/Profile/FullName';
import ProfilPhoto from './Components/Profile/ProfilPhoto';

function App() {
  
  return (
    <div className="App">
        <FullName></FullName>
        <ProfilPhoto></ProfilPhoto>
        <Adresse></Adresse>
        
    </div>
  );
}

export default App;
