import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from './Components/pages/Home'
import Services from './Components/pages/Services'
import Products from './Components/pages/Products'
import Signup from './Components/pages/Signup'
import Home2 from './Components/pages/Home2'
import MarketPage from './Components/pages/MarketPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Services' component={Services} />
        <Route path='/Products' component={Products} />
        <Route path='/sign-up' component={Signup} />
        <Route path='/Home2' component={Home2} />
        <Route path='/MarketPage' component={MarketPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
