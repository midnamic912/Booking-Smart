//TODO: UPLOAD TO GITHUB

var axios = require("axios");
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', async (req, res) => {
  const queryMerchantName = req.query.merchantName;

  const fetchPlaceId = async () => {
    const config = {
      params: {
        key: "AIzaSyCDZUORk80tfCDBROrIWdHRhTgVDlLU_tY",
        input: queryMerchantName,
        inputtype: "textquery",
        fields:"name,place_id"
      }
    }
    
    try {
      const {data: response} = await axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json", config);
      return response.candidates[0].place_id;
    } catch (error) {
      throw error;
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
    console.log('Log from server:');
    console.log(response);
    return response;
  } catch (error) {
    throw error; //Todo: throw error, using middleware or throw here
  }
}


  const placeId = await fetchPlaceId();
  const resultObj = await fetchPlaceDetail(placeId);
  res.send(resultObj)




})

app.listen(8080, ()=>{console.log('Server on port 8080.')});