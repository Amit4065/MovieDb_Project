import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
        <div className="header">
                <Link to="/" className="movieDb" style={{textDecoration: "none"}}><span>MovieDb</span></Link>
                    <div className="headerRight">
                        <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                        <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top_Rated</span></Link>
                        <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                    </div>
        </div>
    )
}

export default Header