import React, { useEffect, useState } from "react";
import boxHeart from "../images/bx_bx-book-heart.png";
import notify from "../images/ic_round-notifications-none.png";
import premium from "../images/fluent_premium-person-20-regular.png";
import proPic from "../images/IMG20210528181544.png";
import logo from "../images/Standard Collection 11.png";
import axios from "axios";


const NavBar = ({setSearchResults})=>{

    const [search,setSearch] = useState("");


    useEffect(()=>{
        implementSearch();
    },[])

    function implementSearch(){
        axios.get("https://www.googleapis.com/books/v1/volumes",{
             params:{
                q: search || "harry+potter"
             }
        })
        .then(response => {
            setSearchResults(response.data.items);
            setSearch("");
        })
        .catch(error => console.log(error));
    }

    return (
        <div id="navBar">
            <div className="nav-left">
                <img src={logo} alt="Logo"/>
                <p>KeazoN<span>BOOKS</span></p>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
                onChange={(e)=>(setSearch(e.target.value))}
                />
                <button onClick={implementSearch}>Search</button>
            </div>
            <div className="nav-right">
                <img src={boxHeart} alt="fav"/>
                <img src={notify} alt="notify"/>
                <img src={premium} alt="premium"/>
                <img src={proPic} alt="propic"/>
            </div>
        </div>
    )
}

export default NavBar;



