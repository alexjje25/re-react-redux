import React from 'react';
import Routes from './routes'
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';

function App() {
  return ( 
    <>
    <Header />
    <Routes />
    <GlobalStyles/>
    </>
    
  );
}

export default App;
