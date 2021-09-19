import {all, takeEvery, put, call} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {getPro} from "../tools";
import { actionPutProducts, actionChangeArr , actionPutFirstArr, actionPutCopy} from '../redux';


function* productsGetter() {

    const data = yield call(getPro);

    yield put(actionPutProducts(data));
}

function* productsChecker(){ //watcher saga
    yield takeEvery('GET_PRODUCTS', productsGetter); //
}

function* scrollFirstWorker() {
    const data = yield call(getPro);
    yield put(actionPutFirstArr(data));
}

function* scrollWorker(data) {
    yield put(actionChangeArr(data.data))
}

function* scrollCopyWorker(data) {
    yield put(actionPutCopy(data.data))
}


function* scrollChecker(data) {
    yield takeEvery('FIRST_ARRAY', scrollFirstWorker);
    yield takeEvery('NEXT_STEP', scrollWorker);
    yield takeEvery('COPY_ARRAY', scrollCopyWorker);
}






function* rootSaga(){ //корневая
    yield all([
        productsChecker(),
        scrollChecker(),
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};