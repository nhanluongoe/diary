import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const DiaryScreen = ({ match }) => {
  const [diary, setDiary] = useState([]);

  useEffect(() => {
    const fetchDiary = async () => {
      const { data } = await axios.get(`/api/diaries/${match.params.id}`);

      setDiary(data);
    };

    fetchDiary();
  }, []);

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
