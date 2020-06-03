import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { authentication } from './authentication.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert
});

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            authentication,
            users,
            alert
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}







export default rootReducer;
