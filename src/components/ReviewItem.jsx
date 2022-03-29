import React from "react";
import "../components/ReviewList.css";

function formatDate(value) {
  const data = new Date(value);
  return `${data.getFullYear()}. ${data.getMonth() + 1}. ${data.getDate()}`;
}

const ReviewItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="ReviewListItem">
        <img
          className="ReviewListItem-img"
          src={item.imgUrl}
          alt={item.title}
        />
        <div>
          <h1>{item.title}</h1>
          <p>{item.rating}</p>
          <p>{formatDate(item.createdAt)}</p>
          <p>{item.content}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
