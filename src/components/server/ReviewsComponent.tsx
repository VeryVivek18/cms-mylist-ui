import RatingStar from "@/components/client/RatingStar";

type Props = { reviews: [Review] };

function ReviewsComponent({ reviews }: Props) {
  return (
    <section className="flex flex-col">
      {reviews.map((review: Review) => {
        return (
          <section
            key={review.id}
            className="flex flex-col my-1
          border-solid border-t-2 border-slate-300"
          >
            <h3 className="text-lg text-slate-800">
              {review.attributes.review_text}
            </h3>
            <div className="flex flex-row items-center">
              <RatingStar
                value={review.attributes.rating}
                size={20}
                showTooltip={false}
              />
              <p className="text-sm text-slate-600 ml-2 pt-1">
                last updated:
                <span className="ml-1">
                  {new Date(review.attributes.updatedAt).toDateString()}
                </span>
              </p>
            </div>
          </section>
        );
      })}
    </section>
  );
}

export default ReviewsComponent;
