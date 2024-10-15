import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";
import classNames from "classnames";
import styles from "./reviewForm.module.css";

export const ReviewForm = () => {
  const {
    name,
    reviews,
    rating,
    setName,
    setReview,
    incrementRating,
    decrementRating,
    doCleanForm,
  } = useForm();
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className={classNames(styles.inputbox)}>
        <input
          required="required"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <span>Имя</span>
      </div>
      <div className={classNames(styles.inputbox)}>
        <input
          required="required"
          type="text"
          value={reviews}
          onChange={(event) => {
            setReview(event.target.value);
          }}
        />
        <span>Текст</span>
      </div>
      <div>
        <span className={classNames(styles.rating)}>Рейтинг</span>
        <Counter
          value={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>
      <div className={classNames(styles.inputbox)}>
        <input
          type="button"
          value="Очистить"
          onClick={(event) => {
            doCleanForm(event.target.value);
          }}
        />
      </div>
    </form>
  );
};
