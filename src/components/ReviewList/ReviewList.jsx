import React from "react";
import ReviewItem from "../ReviewItem/ReviewItem";

const ReviewList = ({ items, onDelete }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <ReviewItem item={item} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewList;
