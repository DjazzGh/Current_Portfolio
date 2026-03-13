import React, { useEffect, useRef } from "react";
import SocialLinks from './SocialLinks';

function Contact() {
    const sectionRef = useRef(null);

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

        const currentRef = sectionRef.current; // Capture the current ref value

        return () => {
            if (currentRef) { // Use the captured ref value
                observer.unobserve(currentRef);
            }
        };
    }, []);

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
                <div className="contact-info contact-list">
                    <SocialLinks />

                </div>
            </div>

        </section>
    );
}

export default Contact;
