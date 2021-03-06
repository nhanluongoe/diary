import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  diaryListReducer,
  diaryDetailsReducer,
  addNewDiaryReducer,
  editDiaryReducer,
} from './reducers/diaryReducers';
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  usersAllReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';

const reducer = combineReducers({
  diaryList: diaryListReducer,
  diaryDetails: diaryDetailsReducer,
  addNewDiary: addNewDiaryReducer,
  diaryEdit: editDiaryReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  usersAll: usersAllReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
