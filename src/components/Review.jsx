import React from "react";

export default function Review(props) {
  return (
    <div className="review">
      <p>{props.content}</p>
      <p>{props.time}</p>
    </div>
  );
}
