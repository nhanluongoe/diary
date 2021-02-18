import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, Container } from 'react-bootstrap';
import diaries from '../diaries';

const DiaryScreen = ({ match }) => {
  const diary = diaries.find((d) => d._id === match.params.id);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row className='justify-content-center'>
        <Col xs='8'>
          <h1>{diary.title}</h1>
          <h5>{diary.time}</h5>
          <p className='font-italic'>
            <i class='fas fa-user-edit'></i> {diary.author}
          </p>
          <p className='text-justify'>{diary.content}</p>
        </Col>
      </Row>
    </>
  );
};

export default DiaryScreen;
