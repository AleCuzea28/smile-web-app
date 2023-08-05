import React from "react";
import "./Character.css"
import character from "./girl_smiling.png"

function Text(props) {
    return (
        <div className="SmileGirl">
            <img src={character} alt="A girl character smiling" width="400" height="400"/>
        </div>
    );
}

export default Text;