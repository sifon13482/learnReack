import { useLogin } from "../context/loginContext/useLogin";
import { NavBarMenuButton } from "../navBarMenuButton/NavBarMenuButton";

export const ExitButton = () => {
  const { loginUser } = useLogin();
  return (
    <NavBarMenuButton
      title={"Exit"}
      onClick={() => {
        loginUser("");
      }}
    />
  );
};
