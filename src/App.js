import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import BooksDisplay from "./Components/BooksDisplay";

const App = ()=>{

  const [searchResults,setSearchResults] = useState([]);
    
  return (
    <div>
      <NavBar setSearchResults={setSearchResults}/>
      <BooksDisplay searchResults={searchResults}/>
    </div>
  )
}

export default App;