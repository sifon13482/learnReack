import { RestaurantPage } from "../restaurants/RestaurantPage";
import { Layout } from "../layout/Layout";
import { LoginContextProvider } from "../context/loginContext/LoginContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeContextProvider } from "../context/themeContext/ThemeContextProvider";

export const App = () => {
  return (
    <Provider store={store}>
      <LoginContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantPage />
          </Layout>
        </ThemeContextProvider>
      </LoginContextProvider>
    </Provider>
  );
};
