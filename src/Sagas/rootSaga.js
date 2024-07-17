
import postsAndPhotosSaga from "./postsAndPhotosSaga";
import usersSaga from "./usersSaga";
import { all } from "redux-saga/effects";

function* rootSaga(){
    yield all([postsAndPhotosSaga(),usersSaga()])
}

export default rootSaga