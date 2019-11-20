import * as Types from '../constants/types';
import { findItemInList } from '../utils/utils';
var initialState = {
    listNotify: [],
    loading: true,
    error: false,
    message: ''
};
const notification = (state = initialState, action) => {
    switch(action.type){
        case Types.RESET_FETCH_NOTIFICATION:
            return { ...state, error: false, message: '' };
        case Types.TOGGLE_CHECKBOX_NOTIFICATION:
            const { type, value } = action.payload;
            const ind = findItemInList(state.listNotify,value);
            let listArr = state.listNotify;
            switch(type){
                case 'addAll':
                    listArr = listArr.map(item => {item.checked = true; return item;});
                    break;
                case 'addItem':
                    listArr[ind].checked = true;
                    break;
                case 'removeAll':
                    listArr = listArr.map(item => {item.checked = false; return item;});
                    break;
                case 'removeItem':
                    listArr[ind].checked = false;
                    break;
                default: break;
            }
            return { ...state, listNotify: listArr }; 
        case Types.FETCH_LIST_NOTIFICATION:            
            return { ...state, loading: true };
        case Types.FETCH_LIST_NOTIFICATION_SUCCESS:
            const { payload } = action;
            let listNotify = payload.db_shop.map(item => {item.checked = false; return item;})
            return { ...state, error: payload.error, message: payload.error ? payload.message : '', loading: false, listNotify };
        case Types.FETCH_LIST_NOTIFICATION_FAIL:
            return { ...state, error: true, message: 'Lỗi! không thể kêt nối, vui lòng thử lại sau' };
        default: return state;
    }
}
export default notification;