import axios from "axios";

export default {

  // Get park from nps search 
  getNationalPark: function(query) {
    return axios.get("https://developer.nps.gov/api/v1/parks?q=" + query +  "&api_key=1y0zIuzR0jebuL5GGN8LUNA07CshBja9C5SBzN3F")
  },

  // Gets all books
  getParks: function() {
    return axios.get("/api/parks");
  },
  // Gets the book with the given id
  getPark: function(id) {
    return axios.get("/api/parks/" + id);
  },
  // Deletes the book with the given id
  deletePark: function(id) {
    return axios.delete("/api/park/" + id);
  },
  // Saves a book to the database
  savePark: function(bookData) {
    return axios.post("/api/parks", bookData);
  }
};
