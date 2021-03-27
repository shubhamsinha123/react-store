import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Footer from './components/Footer';
  import ProductListingPage from '../pages/ProductListingPage';

  const RouteContainer = () => {
      return (
        <Switch>
            <Route exact path = "/" render = {()=> <h1>Home</h1>} />
            <Route exact path = "/About" render = {()=> <h1>About</h1>} />
            <Route exact path = "/product" component = {ProductListingPage} />
            <Route exact path = "/footer" render = {()=> Footer} />
        </Switch>
      )
      }

export default RouteContainer;


  