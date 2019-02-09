import React from 'react'
import {Route, IndexRoute} from 'react-router';
import App from "./components/App";

import {Login} from "./components/login/login";
import {HomePage} from "./components/HomePage/HomePage";
import {RegisterPage} from "./components/RegisterPage/RegisterPage";
import {RegisterValidation} from "./components/RegisterValidation/RegisterValidation";
export default (
    <Route path="/" component= {App}>
        <IndexRoute  component={Login}/>
        <Route path="/Home" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={Login} />
        <Route path="/registerConfirmation" component={RegisterValidation} />
    </Route>
);
