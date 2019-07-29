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

  let quotationData = {
    date : postData.date.toString(),
    sent_date : postData.date.toString(),
    attn_toId : {id: postData.attn_toId.id, name: postData.attn_toId.name},
    accountId : {id: postData.accountId.id, name: postData.accountId.name},
    owner: {companyId: postData.owner.companyId, id: postData.owner.id, name: postData.owner.name},
    currency : postData.currency,
    currency_rate : postData.currency_rate,
    due_date : duedate.toDateString(),

    totalAmt : postData.totalAmt,
    subtotal : postData.subtotal,
    tax_amount : postData.tax_amount,

    discount_rate: postData.discount_rate,

    description: postData.description,
    details: postData.details,

    quotationline: quotationLine,

    userId : postData.owner.id
    // address_1: postData.accountId.baseContact._address.address_1,
    // address_2: postData.accountId.baseContact._address.address_2,
    // city: postData.accountId.baseContact._address.city,
    // zip: postData.accountId.baseContact._address.zip,

  }

  console.log(item.payload.type)

  let result = null
  if(item.payload.type == "invoice"){
    result = await api.post("/invoices", {data: quotationData});
  } else {
    result = await api.post("/quotations", {data: quotationData});
  }
  return result.data;
}

const submitEditQuoteSummaryRequest = async(item) => {


  var today = new Date();
  var duedate = new Date();
  duedate.setDate(today.getDate()+3);

  // payload: {item: item, products: products}
  let quotationLine = [...item.payload.products]

  let quotationData = {...item.payload.item}
  quotationData.quotationline = quotationLine
  quotationData.duedate = duedate
  
  if(item.type == "invoice") {
    const result = await api.patch(`/invoices/${quotationData.id}`, quotationData);
    return result.data;
  } else {
    const result = await api.patch(`/quotations/${quotationData.id}`, quotationData);
    return result.data;
  }
 
}


const deleteQuotationfromDBRequest = async(item) => {
  const result = await api.delete(`/quotations/${item.payload}`);
  return result.data;
}


const addNoteQuotationRequest = async (id, note) => {
  const result = await api.post(`/quotations/${id}/notes`, note);
  return result.data;
};


const patchStateQuotationRequest = async (payload) => {
  const result = await api.post(`/quotations/updateStatus/`, {data: payload});
  return result.data;
};

const createNewVersionStateQuotationRequest = async (payload) => {
  const result = await api.post(`/quotations/convert`, {data: payload});
  return result.data;
};

const revertPreviousVersionStateQuotationRequest = async (payload) => {
  const result = await api.post(`/quotations/revertQuotation`, {data: payload});
  return result.data;
};

const getQuoteRequest = async (quoteID) => {

  if(quoteID.type == "invoice"){
    const result = await api.get(`/invoices/${quoteID.quoteID}`);
    return result.data;
  } else {
    const result = await api.get(`/quotations/${quoteID.quoteID}`);
    return result.data;
  }
  
};



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

  console.log(item)
  if(item.payload.edit) {

    try {
      const data = yield call(submitEditQuoteSummaryRequest, item);
      yield put(Actions.submitNewQuoteSuccess(data, true));
    } catch (error) {
      yield put(Actions.submitNewQuoteFailure(error));
    }
  
  } else {

    try {
      const data = yield call(submitquoteSummaryRequest, item);
      if (data[0] == 0){
        var error = new Error();
        throw error
      }

      let message = ''
      if(item.payload.type == "invoice"){
        message = "New invoice has been successfully created"
      } else {
        message = "New quotation has been successfully created"
      }
      yield put(Actions.submitNewQuoteSuccess(message));
    } catch (error) {

      let message = ''
      if(item.payload.type == "invoice"){
        message = "Unable to create new invoice, please try again"
      } else {
        message = "Unable to create new quotation, please try again"
      }

      yield put(Actions.submitNewQuoteFailure(message));
    }

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



function* addQuotationNoteToDB({ payload }) {
  const { id, note } = payload;
  try {
    const data = yield call(addNoteQuotationRequest, id, note);
    yield put(Actions.addNoteQuotationSuccess(data));
  } catch (error) {
    yield put(Actions.addNoteQuotationFailure(error));
  }
}




function* patchStateQuotation({ payload }) {
  try {
    const data = yield call(patchStateQuotationRequest, payload);
    yield put(Actions.HandleStateUpdateSuccess(data.data));
  } catch (error) {
    yield put(Actions.HandleStateUpdateFailure(error));
  }
}


function* createNewVersionStateQuotation({ payload }) {
  try {
    const data = yield call(createNewVersionStateQuotationRequest, payload);
    yield put(Actions.HandleStateUpdateSuccess(data.data));
  } catch (error) {
    yield put(Actions.HandleStateUpdateFailure(error));
  }
}


function* revertPreviousVersionStateQuotation({ payload }) {
  try {
    const data = yield call(revertPreviousVersionStateQuotationRequest, payload);
    yield put(Actions.HandleStateUpdateSuccess(data.data));
  } catch (error) {
    yield put(Actions.HandleStateUpdateFailure(error));
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
export function* addNoteQuotationWatcher() {
  yield takeEvery(Types.ADD_NOTE_QUOTATION, addQuotationNoteToDB);
}
export function* patchStateQuotationWatcher() {
  yield takeEvery(Types.HANDLE_STATE_UPDATE, patchStateQuotation);
}
export function* createNewVersionQuotationWatcher() {
  yield takeEvery(Types.HANDLE_STATE_CREATE_NEW_VERSION, createNewVersionStateQuotation);
}
export function* revertPreviousVersionQuotationWatcher() {
  yield takeEvery(Types.HANDLE_STATE_REVERT_PREVIOUS_VERSION, revertPreviousVersionStateQuotation);
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
    fork(deleteQuoteSummaryWatcher),
    fork(addNoteQuotationWatcher),
    fork(patchStateQuotationWatcher),
    fork(createNewVersionQuotationWatcher),
    fork(revertPreviousVersionQuotationWatcher),

    
    
  

  ]);
}
