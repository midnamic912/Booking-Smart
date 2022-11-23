//TODO: UPLOAD TO GITHUB

var axios = require("axios");
var express = require('express');
var app = express();

app.get('/', async (req, res) => {

  //Todo: add middleware to add res.header "Accept-xxxxx-xxx-allow-origin" (import cors library)

  const fetchPlaceId = async () => {
    const config = {
      params: {
        key: "AIzaSyCDZUORk80tfCDBROrIWdHRhTgVDlLU_tY",
        input: "太魯閣晶英酒店",
        inputtype: "textquery",
        fields:"name,place_id"
      }
    }
    
    try {
      const {data: response} = await axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json", config);
      return response.candidates[0].place_id;
    } catch (error) {
      console.error(error.message);
    }
}


const fetchPlaceDetail = async (placeId) => {
  const config = {
    params: {
      key: "AIzaSyCDZUORk80tfCDBROrIWdHRhTgVDlLU_tY",
      place_id: placeId,
      fields:"name,rating,reviews,user_ratings_total",
      reviews_sort: "newest",
      reviews_no_translations: "true",
    }
  }
  
  try {
    const {data: response} = await axios.get("https://maps.googleapis.com/maps/api/place/details/json", config);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error.message); //Todo: throw error, using middleware or throw here
  }
}


  const placeId = await fetchPlaceId();
  const resultObj = await fetchPlaceDetail(placeId);
  res.send(resultObj)




})

app.listen(3000, ()=>{console.log('Server on port 3000.')});