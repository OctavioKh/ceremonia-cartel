import React, {Component, Fragment} from 'react';
import "./App.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
//pages
import MainPage from "./pages/index.jsx";
import NotFoundPage from "./pages/404.jsx";
import CasaPage from'./pages/home.jsx';
import Videos from './pages/videos.jsx';
import Menu from './Nav.js';
import NFT from './pages/nft.jsx';
import FaqPage from './components/faqs.js'
import Registro from './components/registro.html';



function App() {   
    return (
      <Fragment >
        <Router>
          {/* <Menu/> */}
            <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Route exact path="/ceremonios" component={NFT} />

    <Route exact path="/home" component={CasaPage}/>
    <Route exact path="/faqs" component={FaqPage}/>
      <Redirect to="/404" component={NotFoundPage} />
      </Switch> 
          </Router>
        </Fragment>
      );
  };  


export default App;