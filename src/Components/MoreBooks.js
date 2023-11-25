import React from "react";

const MoreBooks = ({searchResults})=>{

    return (
        <div className="more-books">
            <br/>
            <h1>More Books Like This</h1>
            <br/>
            <div className="book-list">
            {
                searchResults&& (
                    searchResults.map((value, index)=>(
                        <div className="list-img" key={index}>
                            <img src={value.volumeInfo.imageLinks.thumbnail} alt={value.volumeInfo.title}/>                     
                        </div>
                    ))
                )
            }
            </div>
        </div>
    )
}

export default MoreBooks;