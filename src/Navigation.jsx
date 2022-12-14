import React, { useState } from "react"
import "./App.scss"

const Navigation = ({visibility,setVisibility}) => {
    return (
        <div className={`nav ${visibility?'visible':''} nav-black`}>
            <div className={`nav ${visibility?'visible':''} nav-red`}>
                <div className={`nav ${visibility?'visible':''} nav-white`}>
                    <button className="nav-btn close-btn" onClick={()=>setVisibility(!visibility)}>
                        <i className="fas fa-times"></i>
                    </button>
                    <img
                        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                        alt="Logo"
                        className="logo"
                    />
                    <ul className="list">
                        <li>
                            <a href="#">Teams</a>
                        </li>
                        <li>
                            <a href="#">Locations</a>
                        </li>
                        <li>
                            <a href="#">Life at Netflix</a>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <a href="#">Netflix culture memo</a>
                                </li>
                                <li>
                                    <a href="#">Work life balance</a>
                                </li>
                                <li>
                                    <a href="#">Inclusion & diversity</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation
