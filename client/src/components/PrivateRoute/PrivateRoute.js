import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

const { signedInUser} = useContext(UserContext);
console.log("pp",signedInUser)
    return (
        <Route
      {...rest}
      render={({ location }) =>
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