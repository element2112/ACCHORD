import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Register from './pages/Registerpage';
import Dashboard from './pages/Dashboard';
import Profilepage from './pages/Profilepage';
import Accountpage from './pages/Accountpage';
import Updatepage from './pages/Updatepage';
// import Dashboardhome from './components/Dashboardhome';
// import Navbarcomp from './components/Navbarcomp'


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
      </Fragment>
    </Router>
  );
}

export default App;
