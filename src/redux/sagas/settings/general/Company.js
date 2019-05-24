import { all, call, fork, put, takeEvery, select, delay } from "redux-saga/effects";
import { 
  GET_COMPANY,
  UPDATE_COMPANY,
} from "Types";
import { 
  getCompanySuccess,
  getCompanyFailure,
  updateCompanySuccess,
  updateCompanyFailure
 } from "Actions";
//import api from "Api";
import { company1 } from "Components/CompanyDummyData";

//=========================
// REQUESTS
//=========================
const getCompanyRequest = async () => {
  try {
    //const result = await api.get("/company");
    const result = company1;
    return result;
  } catch (err) {
    return err;
  }
}
const updateCompanyRequest = async (company) => {
  try {
    //const result = await api.patch(`/company/${companyID}`, company)
    const result = company1;
    return result
  } catch (err) {
    return err;
  }
}

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getCompanyFromDB() {
  try {
    const data = yield call(getCompanyRequest);
    yield put(getCompanySuccess(data))
  } catch (err) {
    yield put(getCompanyFailure(err))
  }
}
function* updateCompanyToDB() {
  const getCompany = state => state.companyState.companyUpdate;
  const company = yield select(getCompany);
  try {
    const data = yield call(updateCompanyRequest, company);
    yield put(updateCompanySuccess(data))
  } catch (err) {
    yield put(updateCompanyFailure(err))
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getCompanyWatcher() {
  yield takeEvery(GET_COMPANY, getCompanyFromDB);
}
export function* updateCompanyWatcher() {
  yield takeEvery(UPDATE_COMPANY, updateCompanyToDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([,
    fork(getCompanyWatcher),
    fork(updateCompanyWatcher),
  ]);
}
