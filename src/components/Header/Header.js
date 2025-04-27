import { useState } from 'react';
import './Header.css';
// import LeftRightBtn from '../LeftRightBtn/LeftRightBtn'
import Typewriter from "typewriter-effect";

import nodejs from '../Images/Nodejs.png'
import express from '../Images/Express-JS.png'
import react from '../Images/ReactJS.png'
import mongodb from '../Images/Mongodb.png'
import postman from '../Images/Postman.png'
import typeScript from '../Images/Node-typescript-express.png'
import github from '../Images/Github.png'

function Header() {

    const [showList, setShowList] = useState("");
    const [closeList, setCloseList] = useState("");

    function handleClick(clicked) {
        if (clicked === "openMenu") {
            setShowList("show-list");
            setCloseList("");
        }
        if (clicked === "closeMenu") {
            setCloseList("close-list");
            setShowList("");
        }
    }

    return (
        <div id="header">

            <div className="background-logos">
                <img src={react} alt="ReactJS" />
                <img src={express} alt="ExpressJS" />
                <img src={postman} alt="Postman" />
                <img src={mongodb} alt="MongoDB" />
                <img src={typeScript} alt="Node + Typescript + Express" />
                <img src={github} alt="GitHub" />
                <img src={nodejs} alt="NodeJS" />
            </div>

            <div className="container">

                <nav>
                    <h1><span>S</span>ikendra.</h1>
                    <ul id="sidemenu" className={`${showList} ${closeList}`}>
                        <li><a href="#header"> Home</a></li>
                        <li><a href="#about"> About</a></li>
                        <li><a href="#services"> Services</a></li>
                        <li><a href="#projects"> Projects</a></li>
                        <li><a href="#contact"> Contact</a></li>
                        <i className="fa-solid fa-circle-xmark" onClick={() => handleClick("closeMenu")}></i>
                    </ul>
                    <i className="fa-solid fa-bars" onClick={() => handleClick("openMenu")}></i>
                </nav>
                <div className="header-text">
                    {/* <!-- <p>UI/UX Designer</p> --> */}
                    <h1>Hi I'm <span>Sikendra</span> <br /> From Jharkhand
                        <br />
                        <br />
                        <Typewriter
                            options={{
                                strings: ["A Back-End <br/>Developer", "A MERN Stack <br/>Developer", "A Web App <br/>Developer"],
                                autoStart: true,
                                loop: true,
                                cursor: "",
                                wrapperClassName: "typewriterpara",
                            }}
                        />
                    </h1>
                    <br />
                    <br />
                    <div className='btn-div'>
                        <a href="mailto:grdskverma2018@gmail.com">Hire Me</a>
                        <a href="#work">
                            Projects
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;