import React from "react";
import './LeftRightBtn.css'

function LeftRightBtn() {

    const handleCallClick = () => {
        window.location.href = 'tel:+917492956183';
    };
    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/7492956183';
    };

    return (
        <>
            <div className="top-btn-left" >
                <i className="fa-brands fa-whatsapp" onClick={handleWhatsAppClick}></i>
            </div>
            <div className="top-btn-right" >
                <i className="fa-sharp fa-solid fa-phone-volume" onClick={handleCallClick}></i>
            </div>
        </>
    )
}

export default LeftRightBtn;