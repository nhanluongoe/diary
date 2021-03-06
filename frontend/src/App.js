import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import DiaryScreen from './screens/DiaryScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewDiaryScreen from './screens/NewDiaryScreen';
import EditDiaryScreen from './screens/EditDiaryScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/diary/:id' component={DiaryScreen} exact />
          <Route path='/new' component={NewDiaryScreen} exact />
          <Route path='/diary/:id/edit' component={EditDiaryScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
