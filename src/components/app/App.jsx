import { RestaurantPage  } from "../restaurants/RestaurantPage";
import { Layout } from "../layout/Layout";

export const App = () => {
  return (
    <div>
      <Layout>
        <RestaurantPage />
      </Layout>
    </div>
  );
};
