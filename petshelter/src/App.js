import React from 'react';
import './App.css';

import { Router, Link } from "@reach/router";
import Pets from './components/Pets';
import Form from './components/Form';
import EditPets from './components/EditPets';
import PetsDetails from './components/PetsDetail';


function App() {
  return (
    <div className="wrapper">
        <div>
          <h3> Yanny's Pet Shelter!</h3>
        </div>
        <Router>
          <Pets path="/" />
          <Form path="/new" />
          <EditPets path="update/:id" />
          <PetsDetails path="/:id" />
        </Router>
        
        <Link to="/"><button>Home</button></Link>
        <Link to="/new"><button>Add A Pet</button></Link>
    </div>
  );
}
export default App;

