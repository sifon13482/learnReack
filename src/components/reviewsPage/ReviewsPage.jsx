import { useDispatch, useSelector } from "react-redux";
import { selectReviews, selectReviewsRequstStatus } from "../../redux/reviews";
import { useEffect } from "react";
import { getReviews } from "../../redux/reviews/getReviews";
import { Reviews } from "../reviews/Reviews";
import { useParams } from "react-router-dom";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews(restaurantId));
  }, [dispatch, restaurantId]);

  const requestStatus = useSelector(selectReviewsRequstStatus);
  const reviews = useSelector(selectReviews);
  const reviewsArr = Object.values(reviews);

  if (requestStatus === "pending" || requestStatus === "idle") {
    return <div>LOADING ReviewsPage</div>;
  }

  if (requestStatus === "fulfilled") {
    return <Reviews id={restaurantId} reviewsArr={reviewsArr} />;
  }
};
