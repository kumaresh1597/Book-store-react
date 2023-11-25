import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import BooksDisplay from "./Components/BooksDisplay";
import MoreBooks from "./Components/MoreBooks";

const App = ()=>{

  const [searchResults,setSearchResults] = useState([]);
    
  return (
    <div>
      <NavBar setSearchResults={setSearchResults}/>
      <BooksDisplay searchResults={searchResults}/>
      <MoreBooks searchResults={searchResults} />
    </div>
  )
}

export default App;