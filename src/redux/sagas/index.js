import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* fetchProductsSaga(action) {
    try {
        const products = yield call(api.fetchProducts);
        console.log('products: ', products)
        yield put(actions.getProducts.getProductsSuccess(products.data))
    } catch (err) {
        console.log(err);
        yield put(actions.getProducts.getProductsFailure(err))
    }

}

function* mySaga() {
    yield takeLatest(actions.getProducts.getProductsRequest, fetchProductsSaga)
}

export default mySaga;