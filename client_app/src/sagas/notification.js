import * as Types from '../constants/types';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../utils/service';
import {fetchListNotificationSuccess, fetchListNotificationFail} from '../actions/notification'

function fetchListNotification(){
    return Service.fetchListNotification();
}
function* workerListNotification(){
    yield delay(2000)
    try{
        const response = yield call(fetchListNotification);
        const data = response.data;
        yield put(fetchListNotificationSuccess(data));
    }catch(error){
        yield put(fetchListNotificationFail(error));
    }
}
export const notificationSaga = [
    takeEvery(Types.FETCH_LIST_NOTIFICATION, workerListNotification)
]