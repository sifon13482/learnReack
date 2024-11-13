import { TitleCafe } from "../titleCafe/TitleCafe";
import { Link, Outlet } from "react-router-dom";

export const Restaurant = ({ name }) => {
  return (
    <div>
      <TitleCafe name={name} />
      <Link to={`menu`}>Menu</Link>
      <Link to={`reviews`}> Reviews</Link>
      <Outlet />
    </div>
  );
};
