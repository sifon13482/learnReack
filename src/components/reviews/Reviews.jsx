import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useLogin } from "../context/loginContext/useLogin";

export const Reviews = ({ reviews }) => {
  const { currentUserName } = useLogin();

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
      {currentUserName && <ReviewForm />}
    </div>
  );
};
