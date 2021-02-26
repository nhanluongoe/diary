import {
  DIARY_LIST_REQUEST,
  DIARY_LIST_SUCCESS,
  DIARY_LIST_FAIL,
  DIARY_DETAILS_REQUEST,
  DIARY_DETAILS_SUCCESS,
  DIARY_DETAILS_FAIL,
  ADD_NEW_DIARY_REQUEST,
  ADD_NEW_DIARY_SUCCESS,
  ADD_NEW_DIARY_FAIL,
  EIDT_DIARY_REQUEST,
  EIDT_DIARY_SUCCESS,
  EIDT_DIARY_FAIL,
} from '../constants/diaryConstants';

export const diaryListReducer = (state = { diaries: [] }, action) => {
  switch (action.type) {
    case DIARY_LIST_REQUEST:
      return { loading: true, diaries: [] };
    case DIARY_LIST_SUCCESS:
      return { loading: false, diaries: action.payload };
    case DIARY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const diaryDetailsReducer = (state = { diary: [] }, action) => {
  switch (action.type) {
    case DIARY_DETAILS_REQUEST:
      return { loading: true, ...state };
    case DIARY_DETAILS_SUCCESS:
      return { loading: false, diary: action.payload };
    case DIARY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addNewDiaryReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_DIARY_REQUEST:
      return { loading: true };
    case ADD_NEW_DIARY_SUCCESS:
      return { loading: false, diaryInfo: action.payload };
    case ADD_NEW_DIARY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const editDiaryReducer = (state = {}, action) => {
  switch (action.type) {
    case EIDT_DIARY_REQUEST:
      return { ...state, loading: true };
    case EIDT_DIARY_SUCCESS:
      return { loading: false, success: true, diaryInfo: action.payload };
    case EIDT_DIARY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
