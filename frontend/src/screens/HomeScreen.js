import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Diary from '../components/Diary';
import axios from 'axios';

const Homescreen = () => {
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const { data } = await axios.get('/api/diaries');

      setDiaries(data);
    };

    fetchDiaries();
  }, []);

  return (
    <>
      <h1>Latest diaries</h1>
      <Row>
        {diaries.map((diary) => (
          <Col key={diary._id} sm={12} md={6} lg={4} xl={3}>
            <Diary diary={diary} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
