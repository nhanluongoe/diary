import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { addNewDiary as addDiaryAction } from '../actions/diaryActions';
import { getUserDetails } from '../actions/userActions';

const NewDiaryScreen = ({ location, history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const loadingUserDetails = userDetails.loading;
  const errorUserDetails = userDetails.error;
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const addNewDiary = useSelector((state) => state.addNewDiary);
  const loadingAddDiary = addNewDiary.loading;
  const errorAddDiary = addNewDiary.error;
  const { diaryInfo } = addNewDiary;

  const redirect = location.search
    ? location.search.split('=')[1]
    : diaryInfo
    ? `/diary/${diaryInfo._id}`
    : '/';

  useEffect(() => {
    if (diaryInfo) {
      history.push(redirect);
    } else {
      if (!userInfo) {
        history.push('/login');
      } else {
        if (!user.name) {
          dispatch(getUserDetails('profile'));
        }
      }
    }
  }, [dispatch, history, userInfo, user, diaryInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    // DISPATCH ADD NEW DIARY
    dispatch(addDiaryAction(title, content));
  };

  return (
    <FormContainer>
      <h2 className='text-danger'>{errorUserDetails && errorUserDetails}</h2>
      <h1>Create New Diary</h1>
      <h2 className='text-danger'>{errorAddDiary && errorAddDiary}</h2>
      {loadingAddDiary && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='content'>
          <Form.Label>Content</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Create
        </Button>
      </Form>
    </FormContainer>
  );
};

export default NewDiaryScreen;
