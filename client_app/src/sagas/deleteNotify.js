import * as Types from '../constants/types';
import { takeEvery, call, put, delay } from "redux-saga/effects";
import Service from '../utils/service';
import { 
    deleteNotificationSuccess, 
    deleteNotificationFail
} from '../actions/notification'

function deleteNotification(data){
    return Service.deleteNotification(data);
}
function* workerDeleteNotification(dt){
    yield delay(2000);
    try{
        const response = yield call(deleteNotification, dt.payload);
        const data = response.data;
        yield put(deleteNotificationSuccess(data));
    }catch(error){
        yield put(deleteNotificationFail(error));
    }
}
export const deleteNotifySaga = [
    takeEvery(Types.DELETE_NOTIFICATION, workerDeleteNotification)
]