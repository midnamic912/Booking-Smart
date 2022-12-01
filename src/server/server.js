var axios = require("axios");
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/merchant', async (req, res) => {
  const queryKeyword = req.query.keyword;

  const fetchPlaceId = async () => {
    const config = {
      params: {
        key: "AIzaSyCDZUORk80tfCDBROrIWdHRhTgVDlLU_tY",
        input: queryKeyword,
        inputtype: "textquery",
        fields:"name,place_id"
      }
    }
    
    // [OK] TODO: 1. handle zero result
    // TODO: 2. handle wrong result
      const {data: response} = await axios.get("https://maps.googleapis.com/maps/api/place/findplacefromtext/json", config);
      
      if (response.status === "ZERO_RESULTS"){
        return "No Match Result"
      }
      return response.candidates[0].place_id;
    
}


const fetchPlaceDetail = async (placeId) => {
  const config = {
    params: {
      key: "AIzaSyCDZUORk80tfCDBROrIWdHRhTgVDlLU_tY",
      place_id: placeId,
      fields:"name,rating,reviews,user_ratings_total,formatted_address,url",
      reviews_sort: "newest",
      language:"zh-TW"
    }
  }
  
  try {
    const {data: response} = await axios.get("https://maps.googleapis.com/maps/api/place/details/json", config);
    console.log('Log from server:');
    console.log(response);
    return response;
  } catch (error) {
    throw error; 
  }
}


  const placeId = await fetchPlaceId();
  
  // TODO: handle wrong result 
  if (placeId === "No Match Result"){
    console.log("The API response with no result.")
    res.send({result: {name: "No Match Result"}})
  } else {
    const resultObj = await fetchPlaceDetail(placeId);
  res.send(resultObj)
  }
  



})

app.listen(8080, ()=>{console.log('Server on port 8080.')});