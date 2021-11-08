import React from 'react'
//import { Route, Switch } from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
//import {  } from "react-router";
import Singlepage from '../Components/SinglePage/Singlepage';
import Homepage from '../Components/HomePage/Homepage';

function Routed() {
    return (
        <div>
            <Switch>
            <Route exact path="/"><Homepage/></Route>
            <Route exact path ="/para/:id"><Singlepage/></Route>
            </Switch>
        </div>
    )
}

export default Routed
