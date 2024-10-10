import React from "react";
import PropTypes from "prop-types";
import "./Header2.css";

function sumnal(){
    return(
        <div className="sumnal">
            <h1 className="bigger">블로그</h1>
        </div>
    );
}


sumnal.propTypes = {
    text: PropTypes.string.isRequired,
};

export default sumnal;
