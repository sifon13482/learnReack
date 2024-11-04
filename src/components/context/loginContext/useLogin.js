import { useContext } from "react";
import { LoginContext } from "..";

export const useLogin = () => useContext(LoginContext)