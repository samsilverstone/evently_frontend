import { combineReducers } from 'redux';
import auth from './reducers/auth';

const App = combineReducers({
    auth
})

export default App