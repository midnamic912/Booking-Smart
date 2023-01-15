import React from "react";

function Footer(props) {
  return (
    <div>
      <p>Wrong Result? Search again with address!</p>
      <button
        id="retryBtn"
        onClick={() => {
          props.forRetryBtn(true, props.hotel);
        }}
      >
        Search Again
      </button>
      <p className="resourceCredit">
        Resource: <span>🚩</span> Google Map
      </p>
    </div>
  );
}

export default Footer;
