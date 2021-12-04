
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';
import SousProfile from './Profil/SousProfile'

function App() {
  
  return (
    <div className="App">
        <SousProfile
        fullName={'Alkaly SOUMAH'}
        Bio={"FullStack"}
        Profesion={"staudent a Gomycode"}
       
        />
        
    </div>
  );
}

export default App;
