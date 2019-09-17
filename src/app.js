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
import PlaceInfo from './components/PlaceInfo';
import './Styles/styles.scss';
import Results from './components/Results';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Loading from './components/loader';
import { persistor, store } from '../src/combinereducers';





const routes = (
    <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/passreset" component={ResetPassword} />
                    <Route exact path="/forgotpassword" component={ForgotPass} />
                    <Route exact path="/results" component={Results} />
                    <Route name="user" path="/place/:place/:id" component={PlaceInfo} />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
        </PersistGate>
    </Provider >
)



ReactDOM.render(routes, document.getElementById('app'))

export default store