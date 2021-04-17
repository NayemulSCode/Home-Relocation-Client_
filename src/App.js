import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import CartItem from './components/CartItem/CartItem';
import ServiceOrderForm from './components/OrderService/ServiceOrderForm/ServiceOrderForm';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddReview from './components/Dashboard/Review/AddReview';
import Admin from './components/Dashboard/Admin/Admin';
import OrderList from './components/Dashboard/OrderList/OrderList';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <PrivateRoute  path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageServices />
          </PrivateRoute>
          <PrivateRoute path="/cartItem/:id">
            <CartItem />
          </PrivateRoute>
          <Route path="/serviceForm">
            <ServiceOrderForm />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
