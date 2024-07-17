
import { takeLatest, call, put } from "redux-saga/effects";
import ServerCall from "@/services/ServerCall";

function* getUsers() {
    alert("users")
    const res = yield call(ServerCall.get, "https://jsonplaceholder.typicode.com/users")
    console.log(res);
    yield put({
        type:"UPDATE_USERS",
        payload:res.data
    })
}

function* usersSaga() {
    yield takeLatest("USERS", getUsers)
}

export default usersSaga