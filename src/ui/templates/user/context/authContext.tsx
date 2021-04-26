import React, { createContext, useState } from "react";
import axiosBeast from "../../../../infra/http/axiosBeast";
type AuthContent = {
  email?: string | null,
  username?: string | null,
  displayName?: string | null,
  shortBio?: string | null,
  profilePic?: string | null,
  sports?: string[] | null,
  auth?: boolean
  isAuthChecked?: boolean
  loading?: boolean
  updateState: (newState: any) => void
  logout?: () => void
}
const AuthContext = createContext<AuthContent>({updateState:()=>{}});

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

  // const checkAuth = () => {
  //   console.log(router.pathname);
  //   axiosBeast
  //     .get("/users/check-auth")
  //     .then((res) => {
  //       setState({
  //         ...state,
  //         email: res.data.email,
  //         username: res.data.username,
  //         displayName: res.data.displayName,
  //         shortBio: res.data.shortBio,
  //         profilePic: res.data.profilePic,
  //         sports: res.data.sports,
  //         auth: false,
  //         isAuthChecked: true,
  //         loading: false,
  //       });
  //     })
  //     .catch(() => {
  //       setState({
  //         email: null,
  //         username: null,
  //         displayName: null,
  //         shortBio: null,
  //         profilePic: null,
  //         sports: null,
  //         auth: false,
  //         isAuthChecked: true,
  //         loading: false,
  //       });
  //     });
  // };

  // useEffect(checkAuth, []);

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
