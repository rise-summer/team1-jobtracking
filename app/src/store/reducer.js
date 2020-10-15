import { combineReducers } from 'redux';
import {reducer as userMainReducer} from '../components/userMainfeed/store';


const reducer = combineReducers({
    userMain: userMainReducer

});
export default reducer;