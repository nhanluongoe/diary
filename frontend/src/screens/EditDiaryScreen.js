import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { listDiaryDetails, editDiary } from '../actions/diaryActions';

const EditDiaryScreen = ({ history, match }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const diaryDetails = useSelector((state) => state.diaryDetails);
  const { loading, error, diary } = diaryDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const diaryEdit = useSelector((state) => state.diaryEdit);
  const { success } = diaryEdit;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!diary.title) {
        dispatch(listDiaryDetails(match.params.id));
      } else {
        setTitle(diary.title);
        setContent(diary.content);
      }
    }
  }, [dispatch, history, userInfo, match, diary]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(editDiary({ title, content }));
  };

  if (userInfo._id === diary.user) {
    return (
      <FormContainer>
        <h2>Diary information</h2>
        <h2 className='text-danger'>{error && error}</h2>
        <h2 className='text-white border bg-success text-center'>
          {success && 'Diary updated!'}
        </h2>
        {loading && <Loader />}
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
              as='textarea'
              rows={15}
              placeholder='Enter content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </FormContainer>
    );
  } else {
    return <h2 className='text-danger'>You dont own this post</h2>;
  }
};

export default EditDiaryScreen;
