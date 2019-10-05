import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import config from '../../config.json';
import { auth } from '../../actions/auth';
import Store from '../../store/store';
const OauthLogin = () => {
  const { state, dispatch } = useContext(Store);
  const authSuccess = user => {
    const { tokenId } = user;
    auth(dispatch, tokenId);
  };
  const authFail = () => {
    console.log('handle authfail');
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    });
  };
  return (
    <>
      {state.isAuth ? (
        <GoogleLogout
          clientId={config.GCID}
          buttonText='Logout'
          onLogoutSuccess={logout}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={config.GCID}
          buttonText='Login'
          onSuccess={authSuccess}
          onFailure={authFail}
          isSignedIn={true}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </>
  );
};

export default OauthLogin;
