import React from "react";

function Footer(props) {
    return (<div>
    <p>Wrong Result? Search again with address!</p>
    <button onClick={()=>{props.forRetryBtn(true)}}>Search Again</button>
    <p className="resourceCredit">
          Resource: <span>🚩</span> Google Map
        </p>
    </div>)
}

export default Footer;