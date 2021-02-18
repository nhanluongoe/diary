import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  diaryListReducer,
  diaryDetailsReducer,
} from './reducers/diaryReducers';

const reducer = combineReducers({
  diaryList: diaryListReducer,
  diaryDetails: diaryDetailsReducer,
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
