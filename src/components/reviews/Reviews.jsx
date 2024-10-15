import classNames from "classnames";
import styles from "./reviews.module.css";
import { ReviewForm } from "../reviewForm/ReviewForm";

export const Reviews = ({ reviews }) => {
  if (!reviews.length) return null;

  return (
    <div>
      <div className={classNames(styles.reviews)}>
        <h3 className={classNames(styles.title)}>Отзывы</h3>
        <ul className={classNames(styles.list)}>
          {reviews.map((comment) => (
            <li className={classNames(styles.listItem)}>{comment.text}</li>
          ))}
        </ul>
      </div>
      <ReviewForm />
    </div>
  );
};
