import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { listDiaryDetails } from '../actions/diaryActions';
import Loader from '../components/Loader';

const DiaryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const diaryDetails = useSelector((state) => state.diaryDetails);
  const { loading, error, diary } = diaryDetails;

  useEffect(() => {
    dispatch(listDiaryDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <h2 className='text-danger'>{error}</h2>
      ) : (
        <Row className='justify-content-center'>
          <Col xs='8'>
            <h1>{diary.title}</h1>
            <h5>{diary.time}</h5>
            <p className='font-italic'>
              <i className='fas fa-user-edit'></i> {diary.author}
            </p>
            <p className='text-justify'>{diary.content}</p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default DiaryScreen;
