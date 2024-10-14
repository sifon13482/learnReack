import { ReviewForm } from "../reviewForm/ReviewForm";
export const Reviews = ({ reviews }) => {
  if (!reviews.length) return null;

  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((comment) => (
          <li>{comment.text}</li>
        ))}
        <ReviewForm  />
      </ul>
    </div>
  );
};
