import React from "react";
import { useEffect, useState } from "react";
import './Scroll.css'

const GoToTopBtn = (() => {

    const [isVisible, setIsVisible] = useState(false);


    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    

    const listenToScroll = () => {

        let heightToHidden = 100;

        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => {
            window.removeEventListener("scroll", listenToScroll);
        }
    }, [])

    return (

        <>
            {isVisible ?
                <div className="top-btn" >
                    <i className="fa-sharp fa-solid fa-arrow-up" onClick={goToBtn}></i>
                </div>
                : null
            }
        </>

    )
})

export default GoToTopBtn;