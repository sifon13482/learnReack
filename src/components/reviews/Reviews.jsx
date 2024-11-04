import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useLogin } from "../context/loginContext/useLogin";
import { useSelector } from "react-redux";
import { selectReviews } from "../../redux/reviews";

export const Reviews = ({ reviewsId }) => {
  const { currentUserName } = useLogin();
  const reviews = useSelector(selectReviews);
  if (!reviewsId.length) return null;

  return (
    <div>
      <div className={styles.reviews}>
        <h3 className={styles.title}>Отзывы</h3>
        <ul className={styles.list}>
          {reviewsId.map((commentId) => (
            <li className={styles.listItem}>{reviews[commentId].text}</li>
          ))}
        </ul>
      </div>
      {currentUserName && <ReviewForm />}
    </div>
  );
};
