import * as Types from '../constants/types';

/* RESET DATA */
export const resetNotification = () => {
    return {
        type: Types.RESET_NOTIFICATION
    }
}
/* FETCH DATA */
export const fetchListNotification = () => {
    return {
        type: Types.FETCH_LIST_NOTIFICATION
    }
}
export const fetchListNotificationSuccess = data => {
    return {
        type: Types.FETCH_LIST_NOTIFICATION_SUCCESS,
        payload: data
    }
}
export const fetchListNotificationFail = err => {
    return {
        type: Types.FETCH_LIST_NOTIFICATION_FAIL,
        payload: err
    }
}
export const resetFetchNotification = () => {
    return {
        type: Types.RESET_FETCH_NOTIFICATION
    }
}
export const toggleCheckboxNotify = (tp) => {
    return {
        type: Types.TOGGLE_CHECKBOX_NOTIFICATION,
        payload: tp
    }
}

/* CREATE DATA */
export const createNotification = (data) => {
    return {
        type: Types.CREATE_NOTIFICATION,
        payload: data
    }
}
export const createNotificationSuccess = data => {
    return {
        type: Types.CREATE_NOTIFICATION_SUCCESS,
        payload: data
    }
}
export const createNotificationFail = err => {
    return {
        type: Types.CREATE_NOTIFICATION_FAIL,
        payload: err
    }
}

/* UPDATE DATA */
export const fetchItemNotification = (id) => {
    return {
        type: Types.FETCH_ITEM_NOTIFICATION,
        payload: id
    }
}
export const fetchItemNotificationSuccess = (data) => {
    return {
        type: Types.FETCH_ITEM_NOTIFICATION_SUCCESS,
        payload: data
    }
}
export const fetchItemNotificationFail = (err) => {
    return {
        type: Types.FETCH_ITEM_NOTIFICATION_FAIL,
        payload: err
    }
}

export const updateNotification = (data) => {
    return {
        type: Types.UPDATE_NOTIFICATION,
        payload: data
    }
}
export const updateNotificationSuccess = data => {
    return {
        type: Types.UPDATE_NOTIFICATION_SUCCESS,
        payload: data
    }
}
export const updateNotificationFail = err => {
    return {
        type: Types.UPDATE_NOTIFICATION_FAIL,
        payload: err
    }
}

/* DELETE DATA */
export const deleteNotification = (list) => {
    return {
        type: Types.DELETE_NOTIFICATION,
        payload: list
    }
}
export const deleteNotificationSuccess = data => {
    return {
        type: Types.DELETE_NOTIFICATION_SUCCESS,
        payload: data
    }
}
export const deleteNotificationFail = err => {
    return {
        type: Types.DELETE_NOTIFICATION_FAIL,
        payload: err
    }
}