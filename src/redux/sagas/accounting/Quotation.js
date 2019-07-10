import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";


import * as Types from 'Types'
import * as Actions from 'Actions'


import api from "Api";

import { quote, quoteList } from "Components/DummyData";
import { leadSummary } from "../../../components/DummyData";

//=========================
// REQUESTS
//=========================

const getAllQuoteRequest = async () => {
  const result = await api.get("/quotations");
  return result.data;
};

const submitquoteSummaryRequest = async(item) => {

  var today = new Date();
  var duedate = new Date();
  duedate.setDate(today.getDate()+3);

  // payload: {item: item, products: products}
  let quotationLine = [...item.payload.products]
  let postData = {...item.payload.item}

  console.log(postData)

  let quotationData = {
    date : postData.date.toString(),
    sent_date : postData.date.toString(),
    attn_toId : {id: postData.attn_toId.id, name: postData.attn_toId.name},
    accountId : {id: postData.account.id, name: postData.account.name},
    owner: {companyId: postData.owner.companyId, id: postData.owner.id, name: postData.owner.name},
    currency : postData.currency,
    currency_rate : postData.currency_rate,
    due_date : duedate.toDateString(),

    totalAmt : postData.totalAmt,
    subtotal : postData.subtotal,
    tax_amount : postData.tax_amount,
    discount_total: postData.discount_total,

    custinfo: postData.account.fullAddress,
    shipinfo: postData.account.fullAddress,

    quotationline: quotationLine
  }



  const result = await api.post("/quotations", quotationData);
  return result.data;
}

const deleteQuotationfromDBRequest = async(item) => {
  const result = await api.delete(`/quotations/${item.payload}`);
  return result.data;
}


// const getAllQuoteRequest = async () => {
//   const result = quoteList;
//   return result;
// };

const getMyQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getOpenQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getClosedQuoteRequest = async () => {
  const result = quoteList;
  return result;
};
const getQuoteRequest = async (quoteID) => {
  console.log('quoteID')
  console.log(quoteID)
  const result = await api.get(`/quotations/${quoteID}`);
  return result.data;
};
const getQuoteSummaryRequest = async () => {
  const result = leadSummary;
  return result;
};




//=========================
// CALL(GENERATOR) Actions
//=========================
function* changeQuoteList({ payload }) {
  let data;
  try {
    if (payload == "All Quotations") {
      yield delay(500);
      data = yield call(getAllQuoteRequest);
      yield put(Actions.getQuotationSuccess(data));
    } else if (payload == "My Quotations") {
      data = yield call(getMyQuoteRequest);
      yield delay(500);
      yield put(Actions.getQuotationSuccess(data));
    } else if (payload == "Open Quotations") {
      data = yield call(getOpenQuoteRequest);
      yield delay(500);
      yield put(Actions.getQuotationSuccess(data));
    } else if (payload == "Closed Quotations") {
      data = yield call(getClosedQuoteRequest);
      yield delay(500);
      yield put(Actions.getQuotationSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllQuoteRequest);
      yield put(Actions.getQuotationSuccess(data));
    }
  } catch (error) {
    yield put(Actions.getQuotationFailure(error));
  }
}
function* getAllQuoteFromDB() {
  try {
    const data = yield call(getAllQuoteRequest);
    yield delay(500);
    yield put(Actions.getQuotationSuccess(data));
  } catch (error) {
    yield put(Actions.getQuotationFailure(error));
  }
}
function* getQuoteFromDB({ payload }) {
  try {
    const data = yield call(getQuoteRequest, payload);
    yield delay(500);
    yield put(Actions.getSingleQuotationSuccess(data));
  } catch (error) {
    yield put(Actions.getQuotationFailure(error));
  }
}
function* getQuoteSummaryFromDB() {
  try {
    const data = yield call(getQuoteSummaryRequest);
    yield put(Actions.getQuotationSummarySuccess(data));
  } catch (error) {
    yield put(Actions.getQuotationSummaryFailure(error));
  }
}

function* submitQuoteSummarytoDB(item) {
  try {
    const data = yield call(submitquoteSummaryRequest, item);
    yield put(Actions.submitNewQuoteSuccess(data));
  } catch (error) {
    yield put(Actions.submitNewQuoteFailure(error));
  }
}



function* deleteQuotationfromDB(item) {
  try {
    const data = yield call(deleteQuotationfromDBRequest, item);
    if(data.count == 0){
      var error = new Error();
      throw error
    }
    yield put(Actions.deleteSingleQuoteSuccess(data));
  } catch (error) {
    yield put(Actions.deleteSingleQuoteFailure('Unable to delete the record'));
  }
}








//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(Types.CHANGE_QUOTATION_LIST_VIEW, changeQuoteList);
}
export function* getAllQuoteWatcher() {
  yield takeEvery(Types.GET_ALL_QUOTATION, getAllQuoteFromDB);
}
export function* getSingleQuotationWatcher() {
  yield takeEvery(Types.GET_SINGLE_QUOTATION, getQuoteFromDB);
}
export function* getQuoteSummaryWatcher() {
  yield takeEvery(Types.GET_QUOTE_SUMMARY, getQuoteSummaryFromDB);
}
export function* submitQuoteSummaryWatcher() {
  yield takeEvery(Types.SUBMIT_QUOTATION, submitQuoteSummarytoDB);
}
export function* deleteQuoteSummaryWatcher() {
  yield takeEvery(Types.DELETE_QUOTATION, deleteQuotationfromDB);
}


//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllQuoteWatcher),
    fork(getSingleQuotationWatcher),
    fork(getQuoteSummaryWatcher),
    fork(submitQuoteSummaryWatcher),
    fork(deleteQuoteSummaryWatcher)



  

  ]);
}
