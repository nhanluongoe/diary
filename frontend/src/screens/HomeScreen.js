import React from 'react';
import { Row, Col } from 'react-bootstrap';
import diaries from '../diaries';
import Diary from '../components/Diary';

const Homescreen = () => {
  console.log(diaries);
  return (
    <>
      <h1>Latest diaries</h1>
      <Row>
        {diaries.map((diary) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Diary diary={diary} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
