import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import SignUp from './screens/Signup';
import Login from './screens/Login/index';
import AuthProvider from './AuthContext';
import HomePage from './screens/HomePage';
Amplify.configure(awsExports);

ReactDOM.render(
  <HashRouter>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/signup" component={SignUp} />
    <AuthProvider>
    <Route exact path="/login" component={Login} />
    <Route exact path="/home/:user/" component={HomePage} />
    </AuthProvider>
  </Switch>
</HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
