import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useLogin } from "../context/loginContext/useLogin";
import { useSelector } from "react-redux";
import { selectReviews } from "../../redux/reviews";
import { useRestaurantIdFromURL } from "../useRestaurantLink/useRestaurantLink";

export const Reviews = () => {
  const { reviews } = useRestaurantIdFromURL();

  const { currentUserName } = useLogin();
  const reviewsArr = useSelector(selectReviews);
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
