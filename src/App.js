import React from 'react';
import {Router} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './routes'
import history from './services/history';
//redux
import { Provider } from 'react-redux'
import store from './store'

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return ( 
    <Provider store={store}>
    <Router history={history}>
    <Header />
    <Routes />
    <GlobalStyles/>
    <ToastContainer autoClosed={3000} className="toast-container"/>
    </Router>
    </Provider>
    
  );
}

export default App;
