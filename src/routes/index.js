import React from "react";
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Form from "../pages/Form";



const Routes = () =>{

    return(
        <Router>
          
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Form" component={Form} />
                </Switch>

        </Router>
    )
   
};

export default Routes;