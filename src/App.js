import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import { useState } from "react";
import { createContext } from "react";
import Login from "./Components/Login/Login/Login";
import Order from "./Components/Order/Order/Order";
import Admin from "./Components/Admin/Admin/Admin";
import Services from "./Components/Home/Services/Services";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute/PrivateRoute";
// import AddEvents from "./Components/Admin/Admin/Admin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
