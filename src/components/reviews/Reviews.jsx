import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";
import { useLogin } from "../context/loginContext/useLogin";

export const Reviews = ({ id, reviewsArr }) => {
  const { currentUserName } = useLogin();

  return (
    <div>
      <div className={styles.reviews}>
        <h3 className={styles.title}>Отзывы</h3>
        <ul className={styles.list}>
          {reviewsArr.map(({ text }) => (
            <li className={styles.listItem} key={id}>
              {text}
            </li>
          ))}
        </ul>
      </div>
      {currentUserName && <ReviewForm />}
    </div>
  );
};
