import { all } from 'redux-saga/effects';
import { notificationSaga } from './notification';
import { createNotifySaga } from './createNotify';
import { deleteNotifySaga } from './deleteNotify';
export default function* rootSagas() {
    yield all([
        ...notificationSaga,
        ...createNotifySaga,
        ...deleteNotifySaga
    ])
}