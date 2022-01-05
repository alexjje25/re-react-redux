import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;
  //rota esta fechada e usuario nao logado
  if(isClosed && isLoggedIn) {
      return (
          <Redirect
           to={{ pathname: '/Login', state: { prevPath: rest.location.pathname } }}
          />
      );
  }
    // no caso de estar usando eslint utilize o seguinte codigo: eslint-disable-next-line react/jsx-props-no-spreadin
    //informa que o usuario esta logado, ou rota esta aberta
  return <Route {...rest} component={Component} />
}
//informando que a rota nao vai ser fechada
MyRoute.defaultProps= {
  isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
      
     .isRequired,
     //pode ou não ser fechado
    isClosed: PropTypes.bool,
};  

