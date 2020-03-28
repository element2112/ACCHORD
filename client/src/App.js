import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Registerpage';
import Dashboard from './pages/Dashboard';
import Profilepage from './pages/Profilepage';
import Accountpage from './pages/Accountpage';
import Updatepage from './pages/Updatepage';
import Deletepage from './pages/Deletepage';

// import Dashboardhome from './components/Dashboardhome';
// import Navbarcomp from './components/Navbarcomp'
import Homepage from './pages/Homepage';
import './styles/App.css';


function App() {
  return (
    <Router>
      <Fragment>
        <Route path="/" exact component={Homepage} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/profile" exact component={Profilepage} />
        <Route path="/account" exact component={Accountpage} />
        <Route path="/update" exact component={Updatepage} />
        <Route path="/delete" exact component={Deletepage} />
      </Fragment>
    </Router>
  );
}

export default App;
