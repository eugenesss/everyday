import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { 
  GET_ALL_EVENTS,
  ADD_EVENT,
} from "Types";
import { 
  getAllEventsSuccess,
  getAllEventsFailure,

  addEventSuccess,
  addEventFailure,
 } from "Actions";
//import api from "Api";
import { events } from "Components/CalendarDummyData"

//=========================
// REQUESTS
//=========================
const getAllEventsRequest = async () => {
  try {
    //const result = await api.get("/events");
    const result = events;
    return result;
  } catch (err) {
    return err;
  }
}
const addEventRequest = async (newEvent) => {
  try {
    //const result = await api.post("/events")
    const result = newEvent;
    return result;
  } catch (err) {
    return err;
  }
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllEventsFromDB() {
  try {
    const getMe = state => state.usersState.me
    const me = yield select(getMe)
    const events = yield call(getAllEventsRequest);
    const myEvents = events.filter((event) => {
      return event.owner.id == me.id
    })
    yield put(getAllEventsSuccess(events, myEvents));
  } catch (err) {
    yield put(getAllEventsFailure(err));
  }
}
function* addEventToDB() {
  const getNewEvent = state => state.calendarState.eventAdd;
  const newEvent = yield select(getNewEvent)
  try {
    const data = yield call(addEventRequest, newEvent);
    yield put(addEventSuccess(data));
  } catch (err) {
    yield put(addEventFailure(err));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllEventsWatcher() {
  yield takeEvery(GET_ALL_EVENTS, getAllEventsFromDB);
}
export function* addEventWatcher() {
  yield takeEvery(ADD_EVENT, addEventToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getAllEventsWatcher),
    fork(addEventWatcher),
  ]);
}
