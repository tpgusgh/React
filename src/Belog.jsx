import React from "react";
import PropTypes from "prop-types";
import "./Belog.css";
function Belog(){
    return (
        <div className="belog">
            
        </div>
    );
}


Belog.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Belog;