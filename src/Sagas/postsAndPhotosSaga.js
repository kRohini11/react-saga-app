
import ServerCall from "@/services/ServerCall";
import { call, takeLatest ,put } from "redux-saga/effects"

function* getPhotos() {
    alert("photos");
    const res = yield call(ServerCall.get_fetch, "https://jsonplaceholder.typicode.com/photos");
    // console.log(res);
    yield put({
        type: "UPDATE_PHOTOS",
        payload: res
    })
}

function* getPosts() {
    alert("posts");
    const res = yield call(ServerCall.get_xhr, "https://jsonplaceholder.typicode.com/posts")
    //console.log(res);
    yield put({
        type:"UPDATE_POSTS",
        payload:JSON.parse(res)
    })
}

function* postsAndPhotosSaga() {

    yield takeLatest("PHOTOS", getPhotos);
    yield takeLatest("POSTS", getPosts)
}

export default postsAndPhotosSaga