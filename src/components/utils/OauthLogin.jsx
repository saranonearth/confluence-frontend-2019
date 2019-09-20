import React from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';

const OauthLogin = () => {
  const authSuccess = user => {
    console.log('client-side token obtained', user);
  };
  const authFail = () => {
    console.log('handle authfail');
  };
  return (
    <>
      <GoogleLogin
        clientId={config.GCID}
        buttonText='Login'
        onSuccess={authSuccess}
        onFailure={authFail}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default OauthLogin;
