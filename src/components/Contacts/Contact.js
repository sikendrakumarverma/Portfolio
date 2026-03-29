// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef } from 'react';
import { animate, motion } from "framer-motion";
import photo from "../Images/contact.png";
import pdf from '../Images/Resume_Sikendra_Kumar.pdf'
import './Contact.css';

function Contact() {

    const [formData, setFormData] = useState({
        "Name": "",
        "Phone": "",
        "Email": "",
        "Message": "",
    })
    const [error, setError] = useState({
        "Name": false,
        "Phone": false,
        "Email": false,
        "Message": false,
    })
    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value });
        setError({ ...error, [name]: false });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const scriptURL = process.env.REACT_APP_G_SHEET

        const msg = document.getElementById("msg");
        let data = new FormData();
        data.append('Name', formData.Name);
        data.append('Phone', formData.Phone);
        data.append('Email', formData.Email);
        data.append('Message', formData.Message);

        if (formData.Name.length === 0) {
            setError({ ...error, Name: true });
        }
        else if (formData.Phone.length === 0) {
            setError({ ...error, Phone: true });
        }
        else if (formData.Email.length === 0) {
            setError({ ...error, Email: true });
        }
        else if (formData.Message.length === 0) {
            setError({ ...error, Message: true });
        } else {

            fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' })
                .then(response => {
                    msg.innerHTML = "Message sent successfully!!!"
                    setTimeout(function () {
                        msg.innerHTML = ''
                    }, 2000)
                    //reset()
                    setFormData({ ...formData, Name: "", Phone: "", Email: "", Message: "" });
                    // const form = document.forms['submit-to-google-sheet'];

                })
                .catch(error => console.log('Error!', error.message))
        }
    }
    // -------------------------------------------------

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });
    };
    const animationProjectsCount = () => {
        animate(0, 15, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
    };
    const handleCallClick = () => {
        window.location.href = process.env.REACT_APP_CALL_ME;
    };
    const handleWhatsAppClick = () => {
        window.location.href = process.env.REACT_APP_WHATSAPP_ME;
    };


    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact Me</h1>
                        <div className="contact-image" >
                            <img src={photo} alt="" />
                        </div>
                        <p><i className="fa-sharp fa-solid fa-paper-plane"></i> <br /> Email: <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a></p>
                        <p><i className="fa-sharp fa-solid fa-phone-volume" onClick={handleCallClick}></i>Call Me: {process.env.REACT_APP_CALL}</p>
                        <p><i className="fa-brands fa-whatsapp" onClick={handleWhatsAppClick}></i>Whatsapp Me: {process.env.REACT_APP_WHATSAPP}</p>

                        <div className="social-icons">
                            <a href={`${process.env.REACT_APP_FACEBOOK}`}><i className="fa-brands fa-facebook"></i></a>
                            <a href={`${process.env.REACT_APP_TWITTER}`}><i className="fa-brands fa-square-twitter"></i></a>
                            <a href={`${process.env.REACT_APP_TELEGRAM}`}><i className="fa-brands fa-telegram"></i></a>
                            <a href={`${process.env.REACT_APP_LINKEDIN}`}><i
                                className="fa-brands fa-linkedin"></i></a>
                            <a href={`${process.env.REACT_APP_GITHUB}`}><i className="fa-brands fa-github"></i></a>
                        </div>
                        <article>
                            <p>
                                {
                                    <motion.span
                                        whileInView={animationClientsCount}
                                        ref={clientCount}
                                    ></motion.span>
                                }
                                +
                            </p>
                            <span>Linkdin Connection</span>
                        </article>

                        <aside>
                            <article>
                                <p>
                                    {
                                        <motion.span
                                            ref={projectCount}
                                            whileInView={animationProjectsCount}
                                        >
                                            15
                                        </motion.span>
                                    }
                                    +
                                </p>
                                <span>Projects Done</span>
                            </article>
                        </aside>
                        <a href={pdf} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <div className='map'>
                            <iframe title="Google Map Location" src={process.env.REACT_APP_G_MAP}
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" value={formData.Name} onChange={(e) => handleChange(e)} placeholder="Your Name" required />
                            {error.Name ? <span style={{ color: "red" }}>Name is required</span> : null}
                            <input type="text" name="Phone" value={formData.Phone} onChange={(e) => handleChange(e)} placeholder="Your Phone" required />
                            {error.Phone ? <span style={{ color: "red" }}>Phone is required</span> : null}
                            <input type="email" name="Email" value={formData.Email} onChange={(e) => handleChange(e)} placeholder="Your Email" required />
                            {error.Email ? <span style={{ color: "red" }}>Email is required</span> : null}
                            <textarea name="Message" rows="6" value={formData.Message} onChange={(e) => handleChange(e)} placeholder="Your Message"></textarea>
                            {error.Message ? <span style={{ color: "red" }}>Message is required</span> : null}
                            <button type="submit" className="btn btn2" onClick={(e) => handleSubmit(e)}>Submit</button>
                        </form>
                        <span id="msg"> </span>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>copyright @ Sikendra. Made With <i className="fa-solid fa-heart"></i> by Sikendra Kumar Verma</p>
            </div>
        </div>
    )
}

export default Contact;