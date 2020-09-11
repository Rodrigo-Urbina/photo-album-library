import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <li>
          <button onClick={() => loginWithRedirect()}>Login</button>
        </li>
      )}
      {isAuthenticated && (
        <li>
          <button onClick={() => logout()}>Logout</button>
        </li>
      )}
    </div>
  );
};

export default LoginButton;
