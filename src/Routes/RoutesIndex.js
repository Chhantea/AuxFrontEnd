import React,{Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomeIndex from "../Pages/Home/HomeIndex";
import AdminIndex from "../Pages/AdminPage/AdminIndex";

export default class RoutesIndex extends Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/'} exact component={HomeIndex}/>
                    <Route path={'/server'} component={AdminIndex}/>
                </Switch>
            </Router>
        );
    }

}