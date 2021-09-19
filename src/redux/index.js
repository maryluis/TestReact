import {createStore, combineReducers, applyMiddleware} from 'redux';
import {SagaMiddleware, rootSaga} from "../saga";
import {productsGetter, actionGetProducts, actionPutProducts} from "./productsReducer";
import {actionNextStep, actionPutFirstArr, actionPutCopy, scrollReducer, actionChangeArr, actionFirstArr, actionCopyArr} from "./scrollReducer"

const store = createStore(combineReducers({
    products: productsGetter,
    scrollArr: scrollReducer,
}), applyMiddleware(SagaMiddleware))

SagaMiddleware.run(rootSaga)

export {store, productsGetter, actionGetProducts,
     actionPutProducts, actionNextStep, scrollReducer, actionPutCopy, actionChangeArr, actionFirstArr, actionCopyArr, actionPutFirstArr};