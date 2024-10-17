import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";

export const Reviews = ({ reviews }) => {
  if (!reviews.length) return null;

  return (
    <div>
      <div className={styles.reviews}>
        <h3 className={styles.title}>Отзывы</h3>
        <ul className={styles.list}>
          {reviews.map((comment) => (
            <li className={styles.listItem}>{comment.text}</li>
          ))}
        </ul>
      </div>
      <ReviewForm />
    </div>
  );
};
