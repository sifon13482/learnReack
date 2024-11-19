import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useLogin } from "../context/loginContext/useLogin";
import { useDispatch, useSelector } from "react-redux";
import { selectReviews } from "../../redux/reviews";
import { useRestaurantIdFromURL } from "../useRestaurantLink/useRestaurantLink";
import { useEffect } from "react";
import { getReviews } from "../../redux/reviews/getReviews";

export const Reviews = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const { reviews } = useRestaurantIdFromURL();

  const { currentUserName } = useLogin();
  const reviewsArr = useSelector(selectReviews);
  console.log(reviews)
  if (!reviews.length) return null;

  return (
    <div>
      <div className={styles.reviews}>
        <h3 className={styles.title}>Отзывы</h3>
        <ul className={styles.list}>
          {reviews.map((commentId) => (
            <li className={styles.listItem} key={commentId}>
              {reviewsArr[commentId].text}
            </li>
          ))}
        </ul>
      </div>
      {currentUserName && <ReviewForm />}
    </div>
  );
};
