import { restaurants } from "../../constants/mock";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";

import { Layout } from "../layout/Layout";

export const App = () => {
  return (
    <div>
      <Layout>
        {restaurants.map(({ name, menu, reviews }) => (
          <>
            <TitleCafe name={name} />
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
          </>
        ))}
      </Layout>
    </div>
  );
};
