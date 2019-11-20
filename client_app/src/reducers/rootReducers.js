import { combineReducers } from 'redux';
import notification from './notification';
import createNotify from './createNotify';
import deleteNotify from './deleteNotify';
const rootReducers = combineReducers({
    notification,
    createNotify,
    deleteNotify
})
export default rootReducers;