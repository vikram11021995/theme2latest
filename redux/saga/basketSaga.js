import { takeLatest } from "redux-saga/effects";
import {
  FETCH_BASKET,
  FETCHING_MENU_SUCCESS,
  REQUEST_BASKET_AFTER_ADDING_TO_CART,
  REQUEST_BASKET_AFTER_BASKET_UPDATE
} from "../types";
import { fetchBasketSaga } from "../actions/basketActions";

export function* basketFetchSaga() {
  // yield takeLatest(ADD_TO_CART_SUCCESS, fetchBasketSaga);
  // yield takeLatest(FETCHING_MENU_SUCCESS, fetchBasketSaga);

  //yield takeLatest(ADD_TO_CART_MODAL_CLOSE, fetchBasketSaga);
  yield takeLatest(FETCH_BASKET, fetchBasketSaga);
}
export function* basketFetchAfterAddedSaga() {
  yield takeLatest(REQUEST_BASKET_AFTER_ADDING_TO_CART, fetchBasketSaga);
}

export function* basketFetchAfterBasketUpdate() {
  yield takeLatest(REQUEST_BASKET_AFTER_BASKET_UPDATE, fetchBasketSaga);
}
