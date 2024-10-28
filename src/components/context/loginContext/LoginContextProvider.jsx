import { useState } from "react";
import { LoginContext } from "..";

export const LoginContextProvider = ({ children }) => {
  const [currentUserName, setbuttonShow] = useState("");

  const loginUser = (nameUser) => {
    if (nameUser) {
      setbuttonShow(nameUser);
    } else {
      setbuttonShow(nameUser);
    }
  };

  return (
    <LoginContext.Provider value={{ currentUserName, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};
