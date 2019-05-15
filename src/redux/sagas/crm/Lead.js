import {
  all,
  call,
  fork,
  put,
  takeEvery,
  select,
  delay
} from "redux-saga/effects";
import { CHANGE_LEAD_LIST_VIEW, GET_ALL_LEAD } from "Types";
import { getLeadSuccess, getLeadFailure } from "Actions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllLeadRequest = async () => {
  const result = [
    [
      "All Lead",
      "Lead One",
      "Minneapolis",
      "lead@one.com",
      "$100,000",
      "Google",
      60
    ],
    [
      "All Lead",
      "Lead Two",
      "Dallas",
      "lead@test.com",
      "$200,000",
      "Google",
      20
    ],
    [
      "All Lead",
      "Lead Three",
      "Santa Ana",
      "lead@test.com",
      "$10,000",
      "SEM",
      80
    ],
    [
      "All Lead",
      "Lead Four",
      "St. Petersburg",
      "lead@test.com",
      "$400,000",
      "SEO",
      100
    ],
    [
      "All Lead",
      "Lead Five",
      "Toledo",
      "lead@test.com",
      "$6,000",
      "Call In",
      40
    ],
    [
      "All Lead",
      "Lead Six",
      "JacksonVille",
      "lead@test.com",
      "$210,000",
      "Referrals",
      60
    ],
    [
      "All Lead",
      "Lead One",
      "Minneapolis",
      "lead@one.com",
      "$100,000",
      "Google",
      60
    ],
    [
      "All Lead",
      "Lead Two",
      "Dallas",
      "lead@test.com",
      "$200,000",
      "Google",
      0
    ],
    [
      "All Lead",
      "Lead Three",
      "Santa Ana",
      "lead@test.com",
      "$10,000",
      "SEM",
      80
    ],
    [
      "All Lead",
      "Lead Four",
      "St. Petersburg",
      "lead@test.com",
      "$400,000",
      "SEO",
      100
    ],
    [
      "All Lead",
      "Lead Five",
      "Toledo",
      "lead@test.com",
      "$6,000",
      "Call In",
      40
    ],
    [
      "All Lead",
      "Lead Six",
      "JacksonVille",
      "lead@test.com",
      "$210,000",
      "Referrals",
      60
    ],
    [
      "All Lead",
      "Lead One",
      "Minneapolis",
      "lead@one.com",
      "$100,000",
      "Google",
      100
    ],
    [
      "All Lead",
      "Lead Two",
      "Dallas",
      "lead@test.com",
      "$200,000",
      "Google",
      0
    ],
    [
      "All Lead",
      "Lead Three",
      "Santa Ana",
      "lead@test.com",
      "$10,000",
      "SEM",
      80
    ],
    [
      "All Lead",
      "Lead Four",
      "St. Petersburg",
      "lead@test.com",
      "$400,000",
      "SEO",
      100
    ],
    [
      "All Lead",
      "Lead Five",
      "Toledo",
      "lead@test.com",
      "$6,000",
      "Call In",
      40
    ],
    [
      "All Lead",
      "Lead Six",
      "JacksonVille",
      "lead@test.com",
      "$210,000",
      "Referrals",
      60
    ]
  ];
  return result;
};
const getMyLeadRequest = async () => {
  const result = [
    ["My Lead", "My Lead", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getOpenLeadRequest = async () => {
  const result = [
    ["Open Lead", "Open Lead", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getHotLeadRequest = async () => {
  const result = [
    ["Hot Lead", "Hot Lead", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};
const getColdLeadRequest = async () => {
  const result = [
    ["Cold Lead", "Cold Lead", "singapore", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"]
  ];
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* changeLeadList({ payload }) {
  let data;
  try {
    if (payload == "All Leads") {
      // All Leads
      data = yield call(getAllLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "My Leads") {
      // My Leads
      data = yield call(getMyLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Open Leads") {
      // Open Leads
      data = yield call(getOpenLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Hot Leads") {
      // Hot Leads
      data = yield call(getHotLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else if (payload == "Cold Leads") {
      // Cold Leads
      data = yield call(getColdLeadRequest);
      yield delay(500);
      yield put(getLeadSuccess(data));
    } else {
      yield delay(500);
      data = yield call(getAllLeadRequest);
      yield put(getLeadSuccess(data));
    }
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}
function* getAllLeadFromDB() {
  try {
    const data = yield call(getAllLeadRequest);
    yield put(getLeadSuccess(data));
  } catch (error) {
    yield put(getLeadFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* changeViewWatcher() {
  yield takeEvery(CHANGE_LEAD_LIST_VIEW, changeLeadList);
}
export function* getAllLeadWatcher() {
  yield takeEvery(GET_ALL_LEAD, getAllLeadFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([
    fork(changeViewWatcher),
    fork(getAllLeadWatcher)
    // fork(getMyLeadWatcher)
  ]);
}
