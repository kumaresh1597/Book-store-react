import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import BooksDisplay from "./Components/BooksDisplay";
import MoreBooks from "./Components/MoreBooks";

const App = ()=>{

  const [searchResults,setSearchResults] = useState([]);
  const [moreBookList,setMoreBookList] = useState([]);
    
  return (
    <div>
      <NavBar setSearchResults={setSearchResults} setMoreBookList = {setMoreBookList}/>
      <BooksDisplay searchResults={searchResults}/>
      <MoreBooks moreBookList={moreBookList} />
    </div>
  )
}

export default App;