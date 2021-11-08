import React from 'react'
import { Route, Switch } from 'react-router';
import Singlepage from '../Components/SinglePage/Singlepage';

function Routes() {
    return (
        <div>
            <Switch>
            <Route exact path ="/para/:id"><Singlepage/></Route>
            </Switch>
        </div>
    )
}

export default Routes
