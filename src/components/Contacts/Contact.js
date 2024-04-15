// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useRef } from 'react';
import { animate, motion } from "framer-motion";
import photo from "../Images/contact.png";
import pdf from '../Images/Resume_Sikendra p.pdf'
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

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyXnguTG48JdXszmnlPglTlMmQrHA5gBSoiDHeya0BuICLN3r_gzOkWjDysSP2rTQQX/exec'

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

            fetch(scriptURL, { method: 'POST', body: data })
                .then(response => {
                    msg.innerHTML = "Message sent successfull"
                    setTimeout(function () {
                        msg.innerHTML = ''
                    }, 5000)
                    //reset()
                    setFormData({ ...formData, Name: "", Phone: "", Email: "", Message: "" });
                    const form = document.forms['submit-to-google-sheet'];

                })
                .catch(error => console.log('Error!', error.message))
        }
    }
    // -------------------------------------------------

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientsCount = () => {
        animate(0, 300, {
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
        window.location.href = 'tel:+917492956183';
    };
    const handleWhatsAppClick = () => {
        window.location.href = 'https://wa.me/7492956183';
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
                        <p><i className="fa-sharp fa-solid fa-paper-plane"></i> <br /> Email: <a href="mailto:grdskverma2018@gmail.com">grdskverma2018@gmail.com</a></p>
                        <p><i className="fa-sharp fa-solid fa-phone-volume" onClick={handleCallClick}></i>Call Me: 7492956183</p>
                        <p><i className="fa-brands fa-whatsapp" onClick={handleWhatsAppClick}></i>Whatsapp Me: 7492956183</p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/sikendra.verma.18"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-square-twitter"></i></a>
                            <a href="https://t.me/Sikendra2023"><i className="fa-brands fa-telegram"></i></a>
                            <a href="https://www.linkedin.com/in/sikendra-kumar-verma-6539a8239/"><i
                                className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/sikendrakumarverma"><i className="fa-brands fa-github"></i></a>
                        </div>
                        <article>
                            <p>
                                +
                                {
                                    <motion.span
                                        whileInView={animationClientsCount}
                                        ref={clientCount}
                                    ></motion.span>
                                }
                            </p>
                            <span>Linkdin Connection</span>
                        </article>

                        <aside>
                            <article>
                                <p>
                                    +
                                    {
                                        <motion.span
                                            ref={projectCount}
                                            whileInView={animationProjectsCount}
                                        >
                                            15
                                        </motion.span>
                                    }
                                </p>
                                <span>Projects Done</span>
                            </article>
                        </aside>
                        <a href={pdf} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <div className='map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554.05895413192!2d86.02521029035957!3d24.22376927207201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3f10d8416073b%3A0x748037602b73a56a!2sKuruatanr%2C%20Jharkhand%20825324!5e0!3m2!1sen!2sin!4v1682907787469!5m2!1sen!2sin"
                                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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