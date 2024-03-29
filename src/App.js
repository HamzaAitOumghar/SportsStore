import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Provider store={SportsStoreDataStore}>
      <Router>
        <Switch>
          <Route path="/shop" component={ShopConnector} />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
