import React, { createContext, useState, useEffect } from "react";
import axiosBeast from "../../infra/httpClient/axiosBeast";
const AuthContext = createContext({});

function AuthProvider(props: any) {
  const [state, setState] = useState({
    email: null,
    username: null,
    displayName: null,
    shortBio: null,
    profilePic: null,
    sports: null,
    auth: false,
    isAuthChecked: false,
    loading: true,
  });

  const logout = async () => {
    try {
      await axiosBeast.post("/users/sign-out");
      setState({
        email: null,
        username: null,
        displayName: null,
        shortBio: null,
        profilePic: null,
        sports: null,
        auth: false,
        isAuthChecked: true,
        loading: false,
      });
    } catch (err) {
      setState({
        email: null,
        username: null,
        displayName: null,
        shortBio: null,
        profilePic: null,
        sports: null,
        auth: false,
        isAuthChecked: true,
        loading: false,
      });
    }
  };

  const checkAuth = () => {
    axiosBeast
      .get("/users/check-auth")
      .then((res) => {
        setState({
          ...state,
          email: res.data.email,
          username: res.data.username,
          displayName: res.data.displayName,
          shortBio: res.data.shortBio,
          profilePic: res.data.profilePic,
          sports: res.data.sports,
          auth: true,
          isAuthChecked: true,
          loading: false,
        });
      })
      .catch(() => {
        setState({
          email: null,
          username: null,
          displayName: null,
          shortBio: null,
          profilePic: null,
          sports: null,
          auth: false,
          isAuthChecked: true,
          loading: false,
        });
      });
  };

  useEffect(checkAuth, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        updateState: setState,
        logout: logout,
      }}
    >
      { props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
