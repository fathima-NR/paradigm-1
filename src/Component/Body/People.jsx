import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './people.css'; // Make sure to import the CSS file
import T1 from "/src/assets/rohit-bhatia-1.webp"
import T2 from "/src/assets/Zoya-Khan.webp"
import T3 from "/src/assets/MuhammedShamal-K.P.webp"
import T4 from "/src/assets/Chandani-Shah.webp"
import T5 from "/src/assets/JOEL_.webp"
import T6 from "/src/assets/WhatsApp-Image-2024-05-09-at-5.25.11-PM (1).webp"
function People() {
    const [isInView, setIsInView] = useState(false);

    // Use useRef to observe when the People section enters the viewport
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.unobserve(sectionRef.current); // Only observe once
                }
            },
            { threshold: 0.1 } // Adjust the threshold as needed
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

    // Animation variants for images coming from the inside (scaled down) to outside (full size)
    const imageVariants = {
        hidden: { scale: 0.4, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } },
    };

    // Array with specific images for each person
    const peopleData = [
        { role: "Managing Director", name: "Rohit Bhatia", imgUrl:T1 },
        { role: "Design Team", name: "Zoya Khan", imgUrl:T2 },
        { role: "Design Team", name: "Atageldi Mammettachev", imgUrl: T3 },
        { role: "BDM", name: "Chandani Shah", imgUrl: T4 },
        { role: "Procurement", name: "Joel Dsouza", imgUrl: T5 },
        { role: "Design Team", name: "Sofiya Sabu", imgUrl: T6 }
    ];

    return (
        <div ref={sectionRef} style={{ marginTop: '100px' }}>
            <div className='mx-5'>
                <motion.h1
                    className='ms-3 mt-5 '
                    style={{ fontSize: '7vw' }}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
                    }}
                >
                    People
                </motion.h1>
                <hr />
            </div>
            <div className="row d-flex align-items-center mt-5 justify-content-center mx-3">
                {peopleData.map((person, index) => (
                    <motion.div
                        className="col-sm-4 p-4"
                        key={index}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <img
                            src={person.imgUrl} // Display specific image for each person
                            alt={person.name}
                            width={350}
                            className="people-img img-fluid"
                        />
                        <div className='d-flex justify-content-between align-items-end'>
                            <h6 className='mt-3'>{person.role}</h6>
                            <h6 className='me-3'>/{person.name}</h6>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default People;
