import "../styles.css";
import Review from "./Review";
import Rate from "./Rate";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {



  
  return (
    <div className="App">
      <p>{data && data.name + data.place_id}</p>
      <h1 className="merchantName">Merchant Name</h1>
      <Rate rate={4.5} rateCount={1456} />
      <h5>Newest Review:</h5>
      <Review content={"Very Good"} time={"3 days ago"} />
      <Review content={"Bad"} time={"1 month ago"} />
      <p className="resourceCredit">
        Resource: <span>🚩</span> Google Map
      </p>
    </div>
  );
}

export default App;
