import React from "react";
import PropTypes from "prop-types";
import "./Belog.css";
import hungImage from './hung.png';
function Belog(){
    return (
    <div>
        <div className="belog">
            <h2 className="big">hi</h2>
            <img src={hungImage} alt="허동운" />
        </div>
        <br></br>
    </div>    
    );
}


Belog.propTypes = {
    text: PropTypes.string.isRequired,
};


export default Belog;