import { Restaurants } from "../restaurants/Restaurants";
import { Layout } from "../layout/Layout";

export const App = () => {
  return (
    <div>
      <Layout>
        <Restaurants />
      </Layout>
    </div>
  );
};
