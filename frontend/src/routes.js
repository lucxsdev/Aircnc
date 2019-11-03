import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import New from './pages/New';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard'  component={Dashboard} />
                <Route path='/New' exact component={New} />
            </Switch>
        </BrowserRouter>
    )
}