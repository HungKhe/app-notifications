import * as Types from '../constants/types';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../utils/service';
import { 
    createNotificationSuccess, 
    createNotificationFail, 
    fetchItemNotificationFail, 
    fetchItemNotificationSuccess,
    updateNotificationFail,
    updateNotificationSuccess
} from '../actions/notification'

function createNotification(data){
    return Service.createNotification(data);
}
function fetchItemNotification(id){
    return Service.fetchItemNotification(id);
}
function updateNotification(data){
    return Service.updateNotification(data);
}
function* workerCreateNotification(dt){
    yield delay(2000)
    try{
        const response = yield call(createNotification, dt.payload);
        const data = response.data;
        yield put(createNotificationSuccess(data));
    }catch(error){
        yield put(createNotificationFail(error));
    }
}
function* workerFetchItemNotification(dt){
    yield delay(2000)
    try{
        const response = yield call(fetchItemNotification, dt.payload);
        const data = response.data;
        yield put(fetchItemNotificationSuccess(data));
    }catch(error){
        yield put(fetchItemNotificationFail(error));
    }
}
function* workerUpdateNotification(dt){
    yield delay(2000)
    try{
        const response = yield call(updateNotification, dt.payload);
        const data = response.data;
        yield put(updateNotificationSuccess(data));
    }catch(error){
        yield put(updateNotificationFail(error));
    }
}
export const createNotifySaga = [
    takeEvery(Types.CREATE_NOTIFICATION, workerCreateNotification),
    takeEvery(Types.FETCH_ITEM_NOTIFICATION, workerFetchItemNotification),
    takeEvery(Types.UPDATE_NOTIFICATION, workerUpdateNotification)
]