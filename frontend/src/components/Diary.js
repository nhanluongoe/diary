import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

const Diary = ({ diary }) => {
  let _content =
    diary.content.length > 100
      ? diary.content.substr(0, 100) + ' ...'
      : diary.content;

  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/diary/${diary._id}`}>
        <Card.Body>
          <Card.Title>{diary.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {diary.author}
          </Card.Subtitle>
          <Card.Text>{_content}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default Diary;
