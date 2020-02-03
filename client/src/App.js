import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Registerpage';
import Dashboardhome from './components/Dashboardhome';


function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage} />
      <Route path="/register" exact component={Register} />
      <Route path="/dashboard" exact component={Dashboardhome} />
    </div>
  );
}

export default App;
