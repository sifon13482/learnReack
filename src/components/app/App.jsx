import { Layout } from "../layout/Layout";
import { LoginContextProvider } from "../context/loginContext/LoginContextProvider";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { ThemeContextProvider } from "../context/themeContext/ThemeContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RestaurantsNavBarMenu } from "../restaurantsNavBarMenu/RrestaurantsNavBaMenu";
import { RestaurantPage } from "../rastaurantPage/RestaurantPage";
import { MenuPage } from "../menuPage/MenuPage";
import { ReviewsPage } from "../reviewsPage/ReviewsPage";
import { Dish } from "../dish/dish";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "restaurants",
        element: <RestaurantsNavBarMenu />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantPage />,
            children: [
              {
                path: "menu",
                element: <MenuPage />,
              },
              {
                path: "reviews",
                element: <ReviewsPage />,
              },
            ],
          },
        ],
      },
      {
        path: "dish/:dishId",
        element: <Dish />,
      },
    ],
  },
  {},
]);

export const App = () => {
  return (
    <Provider store={store}>
      <LoginContextProvider>
        <ThemeContextProvider>
          <RouterProvider router={router}>
          </RouterProvider>
        </ThemeContextProvider>
      </LoginContextProvider>
    </Provider>
  );
};
