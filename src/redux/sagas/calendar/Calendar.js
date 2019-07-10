import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import * as Types from "Types";
import * as Actions from "Actions";

<<<<<<< HEAD
import * as Types from 'Types'
import * as Actions from 'Actions'



//import api from "Api";
import { events } from "Components/CalendarDummyData"
=======
>>>>>>> f5f1919908c0e80c23e889e685e218290644720f
import api from "Api";

//=========================
// REQUESTS
//=========================
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
function* getAllEventsFromDB() {
  try {
    // const getMe = state => state.usersState.me
    // console.log('getMe')
    // console.log(getMe)
    // const me = yield select(getMe)
    // console.log(me)
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
