import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Diary = ({ diary, usersInfo }) => {
  let _content =
    diary.content.length > 100
      ? diary.content.substr(0, 100) + ' ...'
      : diary.content;

  let author =
    diary && usersInfo
      ? usersInfo.filter((user) => user._id === diary.user)[0].name
      : '';

  let time = diary ? diary.createdAt.split('T')[0] : '';

  return (
    <Card className='my-3 p-3 rounded hover'>
      <Link className='text-decoration-none' to={`/diary/${diary._id}`}>
        <Card.Body>
          <Card.Title>{diary.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            by <span className='font-italic'>@{author}</span> at {time}
          </Card.Subtitle>
          <Card.Text>{_content}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.usersAll.usersInfo);
  return { usersInfo: state.usersAll.usersInfo };
};

export default connect(mapStateToProps)(Diary);
