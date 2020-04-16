import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import SearchResults from "./components/search-results.js";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <SearchResults />
      </div>
    </Router>
  );
}

export default App;
