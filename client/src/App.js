import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Registerpage';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />
      <Route path="/register" exact component={Register} />
    </div>
  );
}

export default App;
