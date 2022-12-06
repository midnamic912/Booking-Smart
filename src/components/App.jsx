import "../styles.css";
import Review from "./Review";
import Rate from "./Rate";
import Footer from "./Footer";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {


  const [data, setData] = useState(null);
  const [hotel, setHotel] = useState(null);


  const fetchData = async (retryWithAddress, hotel) => {
    const merchantName = hotel.hotelName; // Extention will fetch the hotel name on Booking.com. <document.querySelector('.pp-header__title')>
    const merchantAddress = hotel.hotelAddress // document.querySelector(".hp_address_subtitle")

    const config = {
      params: {
        keyword: retryWithAddress ? merchantAddress : merchantName, 
      },
    };

    try {
      const { data: merchantData } = await axios.get(
        "http://localhost:8080/merchant",
        config
      );
      console.log("Log form app:", merchantData.result);
      setData(merchantData.result);
    } catch (error) {
      throw error
    }
  };

  //First time load merchant data
  useEffect(async () => {
      const response = await chrome.runtime.sendMessage({message: "Fetch Hotel Data from DOM"});
      console.log(response)
      setHotel(response)   
      fetchData(false, hotel);
  }, []);



  if (data) {
    return (
      <div className="App">
        <h1 className="merchantName">{data.name && data.name}</h1>
        <p>{data.formatted_address && data.formatted_address}</p>
        <Rate
          rate={data.rating ? data.rating : "No Rating"}
          rateCount={
            data.user_ratings_total
              ? data.user_ratings_total
              : "No Rating Total"
          }
        />
        <h4>Newest Review:</h4>
        {data.reviews
          ? data.reviews.map((review, index) => {
              return (
                <Review
                  key={index} // when the index of review is static, it's ok
                  rating={review.rating}
                  content={review.text ? review.text : "No Comment"}
                  time={review.relative_time_description}
                />
              );
            })
          : "No Reviews"}
        <Footer hotel={hotel} forRetryBtn={fetchData}/>
        {/* create a new tab and prevent tabnapping attacks */}
        <a href={data.url} target="_blank" rel="noopener noreferrer">See on Google Map</a>
      </div>
    );
  } else{ // UI before the API comes back
    return (
    <div className="App">
      <h1>Loading Hotel Info...</h1>
    </div>)
  }
}
  

export default App;
