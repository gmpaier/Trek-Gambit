import axios from "axios";
import dotenv from "dotenv";

export default {

  // Get park from nps search 
  getNationalPark: function(query) {
  console.log(process.env.API_KEY);  
  return axios.get("https://developer.nps.gov/api/v1/parks?q=" + query +  "&api_key=" + process.env.REACT_APP_API_KEY);
  
  },

  getIndividualPark: function(parkCode) {
    return axios.get("https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=" + process.env.REACT_APP_API_KEY);
  },

  // Gets all parks
  getParks: function() {
    return axios.get("/api/parks");
  },
  // Gets the park with the given id
  getPark: function(id) {
    return axios.get("/api/parks/" + id);
  },
  // Deletes the park with the given id
  deletePark: function(id) {
    return axios.delete("/api/park/" + id);
  },
  // Saves a park to the database
  savePark: function(parkData) {
    return axios.post("/api/parks", parkData);
  },
  // getLeadBoard: function() {
  //   return axios.get("/api/leaderboard");
  // }
};
