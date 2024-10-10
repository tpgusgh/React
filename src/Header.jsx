import React from "react";
import "./Header.css";
import PropTypes from "prop-types";

function Header(){
    return (
        <div className="divonly">
        <button className="button1">로그인</button>
        <br></br>
        <br></br>
        <hr></hr>
        </div>
        
    );
}
Header.propTypes = {
    text: PropTypes.string.isRequired,
};


export default Header;