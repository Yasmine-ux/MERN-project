import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Main from './main'
// import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";
// import UserPage from "./components/UserPage/UserPage";
// import Navmenu from "./components/layout/Navbar";
// import Footer from "./components/layout/footer";
// import HomePage from "./components/homepage/HomePage";
// import GardenOutdoor from "./components/GardenOutdoor/GArdenOutdoor";
// import HealthBeauty from "./components/HealthBeauty/HealthBeauty";
// import PlumServices from "./components/PlumbingPainting/PlumbingPainting";
// import HomeHelp from "./components/HomeHelp/HomeHelp";
// import AddPage from "./components/AddServices/AddPage";
// import Login2 from "./components/auth/Login2";
// import { connect } from "react-redux";
// import {
//   getServices,
// } from "./actions/service_actions";
// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }
class App extends Component {
//   componentDidMount(){
//     this.props.getServices()
//   }
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
