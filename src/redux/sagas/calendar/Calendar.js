import { all, call, fork, put, takeEvery, select } from "redux-saga/effects";
import { 
  GET_ALL_EVENTS,
  ADD_EVENT,
} from "Types";
import { 
  getAllEventsSuccess,
  getAllEventsFailure,
  getEventFailure,

  addEventSuccess,
  addEventFailure,
 } from "Actions";
//import api from "Api";
import { events } from "Components/CalendarDummyData"
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
}

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
    myEvents.map((item) => {
      item.start = new Date(item.start)
      item.end = new Date(item.end)
      return
    })
    yield put(getAllEventsSuccess(myEvents, myEvents));
  } catch (err) {
    console.log(err)
    yield put(getEventFailure(err));
  }
}


const addEventRequest = async (newEvent) => {
  try {
    const result = await api.post("/events", {data: newEvent})
    // const result = newEvent;
    return result.data;
  } catch (err) {
    return err;
  }
}

function* addEventToDB(item) {
  // const getNewEvent = state => state.calendarState.eventAdd;
  // const newEvent = yield select(getNewEvent)
  // console.log(item.payload)
  try {
    const data = yield call(addEventRequest, item.payload);
    if (!data.success == 1){
      throw 'Unable to add event now'
    }
    yield put(addEventSuccess(item.payload));
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
