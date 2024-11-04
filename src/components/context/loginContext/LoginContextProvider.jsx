import { useState } from "react";
import { LoginContext } from "..";

export const LoginContextProvider = ({ children }) => {
  const [currentUserName, setCurrentUserName] = useState("");

  const loginUser = (nameUser) => {
    if (nameUser) {
      setCurrentUserName(nameUser);
    } else {
      setCurrentUserName(nameUser);
    }
  };

  return (
    <LoginContext.Provider value={{ currentUserName, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};
