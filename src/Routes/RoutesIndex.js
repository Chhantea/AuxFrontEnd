import React,{Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import HomeIndex from "../Pages/Home/HomeIndex";
import AdminIndex from "../Pages/AdminPage/AdminIndex";
import NotFound from "../Pages/NotFound";

export default class RoutesIndex extends Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/'} exact component={HomeIndex}/>
                    <Route path={'/server'} component={AdminIndex}/>
                    <Route path='/404' component={ NotFound } />
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        );
    }

}