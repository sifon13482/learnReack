import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";
import { Tab } from "../tab/Tab";

export const Restaurant = ({name, menu, id, reviews}) => {
  return (
    <div>
      <TitleCafe name={name} />
      <Menu key={id} menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}