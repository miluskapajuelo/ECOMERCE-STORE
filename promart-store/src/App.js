import React from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.sass';
import Login from './components/Login/Login'
import Products from './components/Home/Products'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="app-container">
    <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/products" component={Products}/>
        <Route path="/cart" component={Cart}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
