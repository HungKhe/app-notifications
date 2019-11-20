import * as Types from '../constants/types';
var initialState = {
    loading: true,
    error: false,
    message: '',
    itemUpdate: {
        notifyLogin: false,
        notifyStatus: true
    }
};

const createNotify = (state = initialState, action) => {
    const { payload } = action;
    const mes = action.message ? action.message : 'Lỗi! Không thể tạo thông báo...';
    const mesPayload = payload && payload.message ? payload.message : 'Lỗi! Lỗi hệ thống, vui lòng thử lại sau';
    switch(action.type){
        case Types.RESET_NOTIFICATION:
            return { ...state, error: false, message: '', itemUpdate: {notifyLogin: false, notifyStatus: true} };

        case Types.CREATE_NOTIFICATION:
            return { ...state, loading: true };
        case Types.CREATE_NOTIFICATION_SUCCESS:
            return { ...state, error: payload.error, message: payload.message, loading: false };
        case Types.CREATE_NOTIFICATION_FAIL:
            return { ...state, loading: false, error: true, message: mes };

        case Types.FETCH_ITEM_NOTIFICATION:
            return { ...state, loading: true };
        case Types.FETCH_ITEM_NOTIFICATION_SUCCESS:
            return { ...state, error: payload.error, loading: false, itemUpdate: payload.db_shop };
        case Types.FETCH_ITEM_NOTIFICATION_FAIL:
            return { ...state, loading: false, error: true, message: mesPayload };

        case Types.UPDATE_NOTIFICATION:
            return { ...state, loading: true };
        case Types.UPDATE_NOTIFICATION_SUCCESS:
            return { ...state, error: payload.error, loading: false, message: mesPayload, itemUpdate: payload.db_shop };
        case Types.UPDATE_NOTIFICATION_FAIL:
            return { ...state, loading: false, error: true, message: mesPayload };

        default: return state;
    }
}
export default createNotify;