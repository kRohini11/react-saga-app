
import { configureStore } from "@reduxjs/toolkit"
import { appReducer } from "@/reducer/appReducer"
import logger from "redux-logger"
import createSagaMiddleware from "redux-saga"
import rootSaga from "@/Sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()


export const appStore = configureStore({
    reducer: { appReducer },
    middleware: () => {
        return [logger,sagaMiddleware]
    }
})

sagaMiddleware.run(rootSaga)