import React from "react";

const BooksDisplay = ({searchResults})=>{


    return (
        <div className="main">
           {
                searchResults&& (
                    searchResults.map((value, index)=>(
                        <div className="card" key={index}>
                            <div className="left">
                            <img src={value.volumeInfo.imageLinks.thumbnail} alt={value.volumeInfo.title}/>
                            </div>
                            <div className="right">
                            <p className="title">{value.volumeInfo.title}</p>
                            <div className="desc-div">
                            <p className="description">{value.volumeInfo.description}</p>
                            </div> 
                            <div className="read-now-div">
                            <button className="readNow">Now Read</button>
                            </div>
                            </div>                       
                        </div>
                    ))
                )
           } 
        </div>
    )
}

export default BooksDisplay;