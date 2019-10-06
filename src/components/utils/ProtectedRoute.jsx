import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Store from '../../store/store';
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(Store);
  return (
    <Route
      {...rest}
      render={props =>
        state.isAuth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to='/notautorized' />
        )
      }
    />
  );
};

export default ProtectedRoute;
