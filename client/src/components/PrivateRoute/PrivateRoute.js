import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
const { signedInUser} = useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      //sessionStorage.getItem('token')||
      signedInUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/log-in",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;