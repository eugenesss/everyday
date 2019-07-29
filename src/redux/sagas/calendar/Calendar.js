import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import * as Types from "Types";
import * as Actions from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================

const getAllEventsRequestWithFilter = async (start, end, id) => {
  console.log(id)
  try {
    // const result = await api.get(`/events?filter[where][start][lt]=2019-07-18T02:38:03.197Z`);
    // const stringify = {where: {start: {gt: "2019-07-18T02:38:03.197Z"}}}
    // const result = await api.get(`/events?filter={where: {start: {gt: "2019-07-18T02:38:03.197Z"}}}`)
    
    // const result = await api.get(`events?filter[where][start][gte]=${start}&filter[where][end][lte]=${end}&`);
    // const result = await api.get(`events?filter[where][start][gte]=${start}&filter[where][end][lte]=${end}&filter[order]=start ASC&`);
    const result = await api.get(`events/${id}?filter[where][end][gt]=${start}&filter[where][end][lt]=${end}&filter[order]=start ASC&`);

    return result.data;

  } catch (err) {
    return err;
  }
};


const getAllEventsRequest = async () => {
  try {
    const result = await api.get("/events");
    return result.data;
  } catch (err) {
    return err;
  }
};


//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllEventsFromDB(item) {
  const {payload} = item
  console.log(payload)
  if(payload.filter){

    try {
      let myEvents = yield call(getAllEventsRequestWithFilter, payload.start, payload.end, payload.createdBy);
      myEvents.map(item => {
        item.start = new Date(item.start);
        item.end = new Date(item.end);
        return;
      });
      yield put(Actions.getAllEventsSuccess(myEvents, myEvents));
    } catch (err) {
      yield put(Actions.getEventFailure(err));
    }


  } else {

    try {
      let myEvents = yield call(getAllEventsRequest);
      myEvents.map(item => {
        item.start = new Date(item.start);
        item.end = new Date(item.end);
        return;
      });
      yield put(Actions.getAllEventsSuccess(myEvents, myEvents));
    } catch (err) {
      yield put(Actions.getEventFailure(err));
    }

  }

  
}

const addEventRequest = async newEvent => {
  try {
    const result = await api.post("/events", newEvent);
    // const result = newEvent;
    return result.data;
  } catch (err) {
    return err;
  }
};

function* addEventToDB(item) {
  // const getNewEvent = state => state.calendarState.eventAdd;
  // const newEvent = yield select(getNewEvent)
  // console.log(item.payload)

  try {
    const data = yield call(addEventRequest, item.payload);
    yield put(Actions.addEventSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(Actions.addEventFailure(err));
  }
}

const deleteEventRequest = async id => {
  try {
    const result = await api.delete(`/events/${id}`);
    // const result = newEvent;
    return result.data;
  } catch (err) {
    return err;
  }
};

function* deleteEventFromDB(item) {
  // const getNewEvent = state => state.calendarState.eventAdd;
  // const newEvent = yield select(getNewEvent)
  // console.log(item.payload)
  try {
    const data = yield call(deleteEventRequest, item.payload);
    if (!data.count == 1) {
      throw "Item could not be deleted";
    }
    yield put(Actions.deleteEventSuccess(item.payload));
  } catch (err) {
    yield put(Actions.deleteEventFailure(err));
  }
}

const updateEventRequest = async id => {
  try {
    const result = await api.patch(`/events/?id=${id.id}`, id);
    // const result = newEvent;
    return result.data;
  } catch (err) {
    return err;
  }
};

function* updateEventFromDB(item) {
  // const getNewEvent = state => state.calendarState.eventAdd;
  // const newEvent = yield select(getNewEvent)

  try {
    const data = yield call(updateEventRequest, item.payload);
    yield put(Actions.updateEventSuccess(data));
  } catch (err) {
    console.log("err");
    console.log(err);
    yield put(Actions.updateEventFailure(err));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllEventsWatcher() {
  yield takeEvery(Types.GET_ALL_EVENTS, getAllEventsFromDB);
}
export function* addEventWatcher() {
  yield takeEvery(Types.ADD_EVENT, addEventToDB);
}
export function* deleteEventWatcher() {
  yield takeEvery(Types.DELETE_EVENT, deleteEventFromDB);
}

export function* updateEventWatcher() {
  yield takeEvery(Types.UPDATE_EVENT, updateEventFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    ,
    fork(getAllEventsWatcher),
    fork(addEventWatcher),
    fork(deleteEventWatcher),
    fork(updateEventWatcher)
  ]);
}
