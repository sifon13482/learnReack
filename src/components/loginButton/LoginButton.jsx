import { useLogin } from "../context/loginContext/useLogin";
import { NavBarMenuButton } from "../navBarMenuButton/NavBarMenuButton";

export const LoginButton = () => {
  const { loginUser, currentUserName } = useLogin();

  return (
    !currentUserName && (
      <NavBarMenuButton
        title={"Sing in"}
        onClick={() => {
          loginUser("Ivan");
        }}
      />
    )
  );
};
