import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>DIARY</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {userInfo ? (
                <Container>
                  <Nav.Link href='/new'>
                    <i className='fas fa-plus'></i> New diary
                  </Nav.Link>
                  <NavDropdown title={userInfo.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>
                        <i className='fas fa-user'></i> Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      <i className='fas fa-sign-out-alt'></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Container>
              ) : (
                <Container>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-sign-in-alt'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link>
                      <i className='fas fa-user-plus'></i> Register
                    </Nav.Link>
                  </LinkContainer>
                </Container>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
