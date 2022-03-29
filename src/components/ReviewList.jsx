import React from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <ReviewItem item={item} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewList;
