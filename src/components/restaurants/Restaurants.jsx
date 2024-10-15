// import { restaurants } from "../../constants/mock";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";
// import { Tab } from "../tab/Tab";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Restaurants = ({ name, menu, reviews }) => {
  return (
    <div>
      {/* {restaurants.map(({ name, menu, reviews }) => ())} */}
      <div>
        <TitleCafe name={name} />
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
      <ProgressBar />
    </div>
  );
};
