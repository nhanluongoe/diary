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
} from '../constants/diaryConstants';
import axios from 'axios';

export const listDiaries = () => async (dispatch) => {
  try {
    dispatch({ type: DIARY_LIST_REQUEST });

    const { data } = await axios.get('/api/diaries');

    dispatch({
      type: DIARY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log('debug');
    console.log(error.response);
    dispatch({
      type: DIARY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDiaryDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DIARY_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/diaries/${id}`);

    dispatch({
      type: DIARY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DIARY_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addNewDiary = (title, content) => async (dispatch, getState) => {
  try {
    dispatch({ type: ADD_NEW_DIARY_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      '/api/diaries/new',
      {
        title,
        content,
      },
      config
    );

    dispatch({
      type: ADD_NEW_DIARY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NEW_DIARY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
