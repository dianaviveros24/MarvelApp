import React from "react";
import Toggle from "./Toggle";

let Character = ({ image, name, comics }) => {
    return (
        <div className="o-character">
            <div className="o-character-img">
                <img className="o-img-character" src={image}/>
            </div>

            <div className="o-character-name">
                <h1 className="o-name-character">{name}</h1>
            </div>

            <div className="o-name-comic">
            <h1 className="o-name-character">{comics}</h1>
            </div>
        </div>
    );
}

export default Character;