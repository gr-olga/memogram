import React from "react";
import babl from "../../images/kisspng-speech-balloon-clip-art-dialog-5ac833dbb369c7.3984915815230699157349.png"
import "./Header.css"

export default function Header() {
    return (
        <div className="header">
            <h1 className="header__logo">Memogram</h1>
            <img className="header__bubl" src={babl} alt="message"/>
        </div>
    )
}