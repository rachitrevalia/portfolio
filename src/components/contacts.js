import React, { useState } from 'react'; // Add this import

function Contact() {
    const [show, setShow] = useState(false);

    const copyEmail = () => {
        const email = "rachit.revalia@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setShow(true);  // Show the feedback
            setTimeout(() => setShow(false), 3000);  
        });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-grid">
                <div className="contact-card">
                    <a href="mailto:rachit.revalia@gmail.com" rel="noopener noreferrer" className="contact-link">
                        <img src={`${process.env.PUBLIC_URL}/email-8-svgrepo-com.svg`} alt='mail' className="contact-icon"/>
                        <h3>Email</h3>
                        <p id="email-text">rachit.revalia@gmail.com</p>
                    </a>
                    <button className="copy-btn" onClick={copyEmail}>
                        Copy Email
                    </button>
                    {show && <p>Email copied to clipboard!</p>} 
                </div>

                <div className="contact-card">
                    <a href="https://github.com/rachitrevalia" rel="noopener noreferrer" className="contact-link">
                        <img src={`${process.env.PUBLIC_URL}/github-mark-white.png`} alt='github' className="contact-icon"/>
                        <h3>GitHub</h3>
                        <p>https://github.com/rachitrevalia</p>
                    </a>
                </div>

                <div className="contact-card">
                    <a href="https://linkedin.com/in/rachitrevalia" rel="noopener noreferrer" className="contact-link">
                        <img src={`${process.env.PUBLIC_URL}/linkedin-svgrepo-com.svg`} alt='linkedin'  className="contact-icon"/>
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/rachitrevalia</p>
                    </a>
                </div>

                <div className="contact-card">
                    <a href="https://instagram.com/rachit_revalia" rel="noopener noreferrer" className="contact-link">
                        <img src={`${process.env.PUBLIC_URL}/instagram-svgrepo-com.svg`} alt='instagram' className="contact-icon"/>
                        <h3>Instagram</h3>
                        <p>@rachit_revalia</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;