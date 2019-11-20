
import * as Types from '../constants/types';
var initialState = {
    loading: false,
    error: false,
    message: ''
};
const deleteNotify = (state = initialState, action) => {
    switch(action.type){
        case Types.RESET_NOTIFICATION:
            return { ...state, error: false, message: '', loading: false};

        case Types.DELETE_NOTIFICATION:
            return { ...state, loading: true };
        case Types.DELETE_NOTIFICATION_SUCCESS:
            console.log(action);
            return { ...state, loading: false };
        case Types.DELETE_NOTIFICATION_FAIL:
            console.log(action);
            return { ...state, loading: false };

        default: return state;
    }
}
export default deleteNotify;