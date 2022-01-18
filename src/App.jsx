import React, {Component, Fragment} from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//pages
import MainPage from "./pages/index.jsx";
import NotFoundPage from "./pages/404.jsx";
import CasaPage from'./pages/home.jsx';
import Videos from './pages/videos.jsx';
import Menu from './Nav.js';



function App() {   
    return (
      <Fragment className="App">
        <Router>
          {/* <Menu/> */}
            <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path='/videos' component={Videos} />
    <Route exact path="/home" component={CasaPage}/>
      <Redirect to="/404" component={NotFoundPage} />
      </Switch> 
          </Router>
        </Fragment>
      );
  };  


export default App;