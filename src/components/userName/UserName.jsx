import { useLogin } from "../context/loginContext/useLogin";

export const UserName = () => {
  const { currentUserName} = useLogin();
  return <div>{currentUserName}</div> 
};

