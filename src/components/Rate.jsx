import React from "react";

function Rate(props) {
  return (
    <div>
    <div className="rateStar">
      <div className="emptyStar">★★★★★</div>
      <div className="fullStar" style={{width: (props.rate/5*100)+"%"}}>★★★★★</div>
    </div>
    <h2 className="rate">
      Rate: {props.rate} / {props.rateCount} Rates
    </h2>
    </div>
     
  );
}

export default Rate;
