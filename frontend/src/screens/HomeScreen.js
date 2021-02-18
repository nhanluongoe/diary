import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Diary from '../components/Diary';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listDiaries } from '../actions/diaryActions';

const Homescreen = () => {
  const dispatch = useDispatch();

  const diaryList = useSelector((state) => state.diaryList);
  const { loading, error, diaries } = diaryList;

  useEffect(() => {
    dispatch(listDiaries());
  }, [dispatch]);

  return (
    <>
      <h1>Latest diaries</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {diaries.map((diary) => (
            <Col key={diary._id} sm={12} md={6} lg={4} xl={3}>
              <Diary diary={diary} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Homescreen;
