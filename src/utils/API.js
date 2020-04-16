import axios from "axios";
const BASEURL = "https://api.themoviedb.org/3/search/movie?query="
const APIKEY = "&api_key=ab0daf48e5c9f6b2513a909b48005ede";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
