import { combineReducers } from 'redux';
import auth from './reducers/auth';
import location from './reducers/location'
import locationDetails from './reducers/locationDetails';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

const appPersistConfig = {
    key: 'app',
    storage: storage,
}

const App = combineReducers({
    auth,
    location,
    locationDetails,
})


const pReducer = persistReducer(appPersistConfig, App)
export const store = createStore(pReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)