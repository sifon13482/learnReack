import { useLogin } from "../context/loginContext/useLogin";
import { NavBarMenuButton } from "../navBarMenuButton/NavBarMenuButton";

export const ExitButton = () => {
  const { loginUser, currentUserName } = useLogin();

  return (
    currentUserName && (
      <NavBarMenuButton
        title={"Exit"}
        onClick={() => {
          loginUser("");
        }}
      />
    )
  );
};
