import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Diary from '../components/Diary';
import Loader from '../components/Loader';
import { listDiaries } from '../actions/diaryActions';
import { getUsersAll } from '../actions/userActions';

const Homescreen = () => {
  const dispatch = useDispatch();

  const diaryList = useSelector((state) => state.diaryList);
  const { loading, error, diaries } = diaryList;

  // const usersAll = useSelector((state) => state.usersAll);
  // const { usersInfo } = usersAll;

  useEffect(() => {
    dispatch(listDiaries());
    dispatch(getUsersAll());
  }, [dispatch]);

  return (
    <>
      <h1>Latest diaries</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2 className='text-danger'>{error}</h2>
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
