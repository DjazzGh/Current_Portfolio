import React, { useEffect, useRef, useState } from "react";
import SocialLinks from './SocialLinks';
import emailjs from '@emailjs/browser';

function Contact() {
    const sectionRef = useRef(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    const list = sectionRef.current.querySelector(".contact-list");
                    list.classList.add("revealed");
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        emailjs.init("54xHsc0iLQOAn2JU4");
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            "service_fh818rm",      
            "template_2co5fae",    
            {
                message: message,
                to_email: "djazia.gh77@gmail.com",
            }
        )
        .then((response) => {
            console.log("Email sent successfully!", response);
            setMessage(""); // Clear input after sending
            alert("Message sent successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send message. Please try again.");
        });
    };

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <h2>Contact</h2>
            <p>Reach out to me</p>
            <div className="contact-container">
                <img
                    src="./contact2.png"
                    alt="Profile"
                    className="contact-image"
                />
                <ul className="contact-list">
                  
                    
                    <SocialLinks />
                    <li></li>
<form className="contact-form" onSubmit={handleSubmit} style={{ paddingTop: '10px' }}>
                <input
                    type="text"
                    className="contact-input"
                    placeholder="Send me a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit" className="contact-button">
                    <span role="img" aria-label="Arrow">➣</span>
                </button>
            </form>
                </ul>
            </div>
           
        </section>
    );
}

export default Contact;
