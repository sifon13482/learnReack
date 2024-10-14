import { useForm } from "./useForm";
import { Counter } from "../counter/Counter";

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
      <div>
        <i>Имя</i>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <i>Текст</i>
        <input
          type="text"
          value={reviews}
          onChange={(event) => {
            setReview(event.target.value);
          }}
        />
      </div>
      <div>
        <i>
          Рейтинг
          <Counter
            value={rating}
            increment={incrementRating}
            decrement={decrementRating}
          />
        </i>
      </div>
      <button
        onClick={(event) => {
          doCleanForm(event.target.value);
        }}
      >
        Очистить
      </button>
    </form>
  );
};
