import { combineReducers } from 'redux';
import auth from './reducers/auth';
import location from './reducers/location'

const App = combineReducers({
    auth,
    location
})

export default App