import { combineReducers } from 'redux';
import auth from './reducers/auth';
import location from './reducers/location'
import locationDetails from './reducers/locationDetails';

const App = combineReducers({
    auth,
    location,
    locationDetails,
})

export default App