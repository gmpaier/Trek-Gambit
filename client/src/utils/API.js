import axios from "axios";

const host = "http://localhost:3001"

export default {

  // Get park from nps search 
  getNationalPark: function(query) {
  console.log(process.env.API_KEY);  
  return axios.get("https://developer.nps.gov/api/v1/parks?q=" + query +  "&api_key=" + process.env.REACT_APP_API_KEY);
  
  },

  getIndividualPark: function(parkCode) {
    return axios.get("https://developer.nps.gov/api/v1/parks?parkCode=" + parkCode + "&api_key=" + process.env.REACT_APP_API_KEY);
  },

  getParkCodes: function() {
    return axios.get("https://developer.nps.gov/api/v1/parks?&limit=467&api_key=1y0zIuzR0jebuL5GGN8LUNA07CshBja9C5SBzN3F")
  },

  // Gets all parks
  getParks: function() {
    return axios.get(host + "/api/parks");
  },

  // Gets the park with the given id
  getPark: function(id) {
    return axios.get(host + "/api/parks/" + id);
  },
  // Deletes the park with the given id
  deletePark: function(id) {
    return axios.delete(host + "/api/park/" + id);
  },
  // Saves a park to the database
  savePark: function(parkData) {
    return axios.post(host + "/api/parks", parkData);
  },
  saveVisit: function(visit) {
    return axios.post(host + "/api/visits", visit);
  },
  getVisits: function() {
    return axios.get(host + "/api/visits");
  },
  getMyVisits: function() {
    return axios.get(host + "/api/visits/myVisits");
  },
  getCountByUser: function() {
    return axios.get(host + "/api/visits/byUser");
  },
  getCountByPark: function() {
    return axios.get(host + "/api/visits/byPark");
  },
  signup: function(user) {
    return axios.post(host + "/api/users/signup", user);
  },
  login: function(user) {
    return axios.post(host + "/api/users/login", user);
  }
  // getLeadBoard: function() {
  //   return axios.get("/api/leaderboard");
  // }
};
