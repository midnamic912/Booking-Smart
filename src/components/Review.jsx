import React from "react";

export default function Review(props) {
  return (
    <div className="review">
      <p>{"Rating: " + props.rating}</p>
      <p style={props.content === "No Comment" ? { color: "#B2B2B2" } : null}>
        {props.content}
      </p>
      <p>{props.time}</p>
    </div>
  );
}
