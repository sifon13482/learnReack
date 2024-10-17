import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";
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
      <div className={styles.inputbox}>
        <input
          required="required"
          type="text"
          value={name}
          onChange={() => setName()}
        />
        <span>Имя</span>
      </div>
      <div className={styles.inputbox}>
        <input
          required="required"
          type="text"
          value={reviews}
          onChange={() => setReview()}
        />
        <span>Текст</span>
      </div>
      <div>
        <span className={styles.rating}>Рейтинг</span>
        <Counter
          value={rating}
          increment={incrementRating}
          decrement={decrementRating}
        />
      </div>
      <div className={styles.inputbox}>
        <button className={styles.button} onClick={doCleanForm}>Очистить</button>
        {/* <input type="button" value="Очистить"  /> */}
      </div>
    </form>
  );
};
