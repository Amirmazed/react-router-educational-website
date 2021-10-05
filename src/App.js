import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Error from "./components/Error/Error";
import Services from "./components/Services/Services";
import Amir from "./components/Amir/Amir";
import About from "./components/AboutUs/About";
import Contact from "./components/Contact/Contact";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "hero alom",
  });

  return (

    <div className="App">

      <userContext.Provider value={[user, setUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
           
            <Route
            path="/services">
              <Services></Services>
            </Route>
            <Route
            path="/amir">
              <Amir></Amir>
            </Route>

            <Route
            path="/about">
              <About></About>
            </Route>

            <Route
            path="/contact">
              <Contact></Contact>
            </Route>

            
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
