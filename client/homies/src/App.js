import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Main from './main'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
        <Main/>
        </Router>
      </Provider>
      
    );
  }
}
export default App;
