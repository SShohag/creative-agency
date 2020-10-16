import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { useState } from 'react';
import Login from './components/Login/Login/Login';
import Sidebar from './components/Order/Sidebar/Sidebar';
import Order from './components/Order/Order/Order';
import Review from './components/Order/Review/Review';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './components/Order/ServiceList/ServiceList';
import TotalServiceList from './components/AdminSection/TotalServiceList/TotalServiceList';
import AddService from './components/AdminSection/AddService/AddService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>

        <Route exact path="/home">
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/order/:Name">
          <Order></Order>
        </PrivateRoute>

        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>

        <PrivateRoute path="/service">
          <ServiceList></ServiceList>
        </PrivateRoute>

        <PrivateRoute path="/TotalServiceList">
          <TotalServiceList></TotalServiceList>
        </PrivateRoute>

        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
