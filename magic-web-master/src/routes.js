import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Confirm from './pages/confirm-user'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/confirm-user/:id"} component={Confirm}/>
            <Route exact path={"/dashboard"} component={Dashboard} />
        </BrowserRouter>
    );
    
}

export default Routes;