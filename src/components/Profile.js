// src/components/Profile.js

// TODO: Need to bootstrap the profile to present it clean

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import JSONPretty from 'react-json-pretty';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <JSONPretty id="json-pretty" data={JSON.stringify(user, null, 2)}></JSONPretty>
    </Fragment>
  );
};

export default Profile;