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
import { componse, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import App from './combinereducers';
import { autoRehydrate, persistStore } from 'redux-persist';
import loadState from './components/localstorage';


let store = createStore(App,
    persistedState,
    applyMiddleware(thunk))


const routes = (
    <Provider store={store}>
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
    </Provider >
)

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});

ReactDOM.render(routes, document.getElementById('app'))

export default store