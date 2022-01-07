import React from 'react';
import {Router} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import history from './services/history';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return ( 
    <Router history={history}>
    <Header />
    <Routes />
    <GlobalStyles/>
    <ToastContainer autoClosed={3000} className="toast-container"/>
    </Router>
    
  );
}

export default App;
