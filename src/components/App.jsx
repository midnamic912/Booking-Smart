import "../styles.css";
import Review from "./Review";
import Rate from "./Rate";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState(null)

  const fetchData = async () => {
    const config = {
      params: {
        merchantName: "寒舍艾美" // Extention will fetch the hotel name on Booking.com. <document.querySelector('.pp-header__title')>
      }
    }


    try {
      const {data: merchantData} = await axios.get('http://localhost:8080/', config);
      console.log('Log form app:' , merchantData.result)
      setData(merchantData.result); 
    } catch (error) {
      throw error;
    }
   
  }

  useEffect(()=>{
    fetchData();
  },[]);


  
  return (
    <div className="App">
      <h1 className="merchantName">{data && data.name}</h1>
      <Rate
        rate={data && data.rating}
        rateCount={data && data.user_ratings_total}
      />
      <h4>Newest Review:</h4>
      {data &&
        data.reviews.map((review) => {
          return (
            <Review
              rating={review.rating}
              content={review.text ? review.text : "No Comment"}
              time={review.relative_time_description}
            />
          );
        })}
      <p className="resourceCredit">
        Resource: <span>🚩</span> Google Map
      </p>
    </div>
  );
}

export default App;
