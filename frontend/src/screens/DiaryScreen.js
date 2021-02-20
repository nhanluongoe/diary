import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { listDiaryDetails } from '../actions/diaryActions';
import { getUsersAll } from '../actions/userActions';
import Loader from '../components/Loader';

const DiaryScreen = ({ match }) => {
  const dispatch = useDispatch();

  const diaryDetails = useSelector((state) => state.diaryDetails);
  const { loading, error, diary } = diaryDetails;

  const usersAll = useSelector((state) => state.usersAll);
  const errorUsersAll = usersAll.error;
  const { usersInfo } = usersAll;

  let author =
    usersInfo && diary
      ? usersInfo.filter((user) => user._id === diary.user)[0]
      : '';

  author = author ? author.name : '';

  useEffect(() => {
    dispatch(listDiaryDetails(match.params.id));
    dispatch(getUsersAll());
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
            <div>
              {errorUsersAll ? (
                <h2 className='text-danger'>{error}</h2>
              ) : (
                <p className='font-italic'>
                  <i className='fas fa-user-edit'></i> {author}
                </p>
              )}
            </div>
            <p className='text-justify'>{diary.content}</p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default DiaryScreen;
