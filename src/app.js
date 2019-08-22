import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import NotFoundPage from './components/NotFoundPage';
import ForgotPass from './components/forgotpassword';
import ResetPassword from './components/ResetPassword';
import './Styles/styles.scss';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import App from './combinereducers';

let store = createStore(App, applyMiddleware(thunk))

const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/passreset" component={ResetPassword} />
                <Route exact path="/forgotpassword" component={ForgotPass} />
                <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    </Provider >
)

ReactDOM.render(routes, document.getElementById('app'))

