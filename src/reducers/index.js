import {combineReducers} from 'redux';
import {registration} from "./registration.reducer";

const rootReducer= combineReducers({
    users,
    registration,
    userValidation
});

export default rootReducer;