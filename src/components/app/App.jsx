import { RestaurantPage } from "../restaurants/RestaurantPage";
import { Layout } from "../layout/Layout";
import { LoginContextProvider } from "../context/loginContext/LoginContextProvider";

export const App = () => {
  return (
    <div>
      <LoginContextProvider>
        <Layout>
          <RestaurantPage />
        </Layout>
      </LoginContextProvider>
    </div>
  );
};
